import d3 from 'd3';

/**
 * Function accepts a projection, array of geojson features, and a bounding box,
 * returns a new projection to fit within the bounding box
 */
export default (projection, features, box) => {
    // get the bounding box for the data - might be more efficient approaches
    let left = Infinity,
        bottom = -Infinity,
        right = -Infinity,
        top = Infinity;

    // reset projection
    projection
        .scale(1)
        .translate([0, 0]);

    // calculate bounds by iterating over each 'feature' (geo path, in this case a county)
    features.forEach(function(feature) {
        d3.geo.bounds(feature).forEach(function(coords) {
            coords = projection(coords);

            if (coords) {
                let x = coords[0],
                    y = coords[1];

                if (x < left) left = x;
                if (x > right) right = x;
                if (y > bottom) bottom = y;
                if (y < top) top = y;
            }
        });
    });

    // project the bounding box, find aspect ratio
    function width(bb) {
        return (bb[1][0] - bb[0][0]);
    }

    function height(bb) {
        return (bb[1][1] - bb[0][1]);
    }

    function aspect(bb) {
        return width(bb) / height(bb);
    }

    var startbox = [[left, top],  [right, bottom]],
        a1 = aspect(startbox),
        a2 = aspect(box),
        widthDetermined = a1 > a2,
        scale = widthDetermined ?
            // scale determined by width
            width(box) / width(startbox) :
            // scale determined by height
            height(box) / height(startbox);

    scale -= scale * 0.04;
        // set x translation
    var transX = box[0][0] - startbox[0][0] * scale,
    // set y translation
        transY = box[0][1] - startbox[0][1] * scale;


    if (widthDetermined) {
        transY = transY - (transY + startbox[1][1] * scale - box[1][1])/2;
    } else {
        transX = transX - (transX + startbox[1][0] * scale - box[1][0])/2;
    }

    return projection.scale(scale).translate([transX, transY]);
};
