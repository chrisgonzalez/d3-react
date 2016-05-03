import React, { Component, PropTypes } from 'react';
import d3 from 'd3';
import topojson from 'topojson';
import fitProjection from 'components/map/fit-map-projection'

require('./map.scss');

class Map extends Component {
    constructor(props) {
        super(props);

        this.drawMap = this.drawMap.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data.objects) {
            this.drawMap(nextProps.data);
        }
    }

    drawMap(mapData) {
        const map = this.refs['map'];

        const features = topojson.feature(mapData, mapData.objects.states).features;

        const width = window.innerWidth;
        const height = window.innerHeight;

        var projection = d3.geo.albersUsa()
                           .scale(300)
                           .translate([width / 2, height / 2]);

        const path = d3.geo.path().projection(projection);

        const states = d3.select(map).selectAll('.state').data(features);

        states.enter()
              .append('path');

        states.attr('class', 'state')
              .attr('d', path)

        states.exit().remove('.state');
    }

    render() {
        return (
            <svg ref="map" className="map">

            </svg>
        );
    }
}

export default Map;
