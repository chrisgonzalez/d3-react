import React, { Component, PropTypes } from 'react';
import d3 from 'd3';

require('./bgl-viz.scss');

class BGLVisualization extends Component {

    constructor(props) {
        super(props);

        this.drawViz = this.drawViz.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data.length) {
            // const morningReadings = nextProps.data.filter((d) => {
            //     const hour = new Date(d.timestamp).getHours();
            //     return hour > 3 && hour < 9;
            // });

            // console.log('passing', morningReadings.length, 'readings');
            // this.drawViz(morningReadings);
            this.drawViz(nextProps.data);

        }
    }

    drawViz(data) {
        const svg = this.refs['viz'];

        const readings = d3.select(svg).selectAll('.reading').data(data);

        const yScale = d3.scale
                         .linear()
                         .domain(d3.extent(data, d => d.value))
                         .range([window.innerHeight, 0]);

        const xScale = d3.scale.linear().domain([0, 23]).range([0, window.innerWidth]);

        readings.enter()
                .append('circle')
                .attr('r', 2);

        readings.attr('cx', d => xScale(new Date(d.timestamp).getHours()))
                .attr('cy', d => yScale(d.value));

        readings.exit().remove('circle');

        console.log('READINGS', readings);
    }

    render() {
        return (
            <svg ref="viz"></svg>
        )
    }
}

export default BGLVisualization;
