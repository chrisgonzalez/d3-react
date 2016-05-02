import React, { Component, PropTypes } from 'react';
import d3 from 'd3';
import moment from 'moment';

class BGLSummary extends Component {
    render() {
        const valueExtent = d3.extent(this.props.data, (d) => (d.value));

        const timeExtent = d3.extent(this.props.data, (d) => (d.timestamp)).map((d) => (moment(d).format('MMM Mo, YYYY h:MM a')));

        const median = d3.median(this.props.data, (d) => (d.value));

        const deviation = d3.deviation(this.props.data, (d) => (d.value));

        const highs = this.props.data.filter((d) => (d.value > 180));

        const lows = this.props.data.filter((d) => (d.value < 65));

        /**
         * d3 scales accept an input domain (consider this like calibration values), and output valus in a specified range
         * this can be numeric, color interpolation, or categories!
         */
        const colorScale = d3.scale.linear().domain(valueExtent).range(['green', 'red']);

        const randomReading = this.props.data[Math.floor(this.props.data.length * Math.random())] || {};

        console.log(randomReading);

        return (
            <div className="bgl-summary">
                <h2>Data Summary</h2>
                <h5>The records begin on {timeExtent[0]}, and continue through {timeExtent[1]}.</h5>
                <h5>Values range from {valueExtent[0]} to {valueExtent[1]}.</h5>
                <h5>The median value is {median}.</h5>
                <h5>The standard deviation is {deviation}.</h5>
                <h5>In this data set, there are {lows.length} low glucose readings, about {Math.round(100 * lows.length / this.props.data.length)}% of all readings</h5>
                <h5>In this data set, there are {highs.length} high glucose readings, about {Math.round(100 * highs.length / this.props.data.length)}% of all readings</h5>

                <h5 style={{color: colorScale(randomReading.value), fontWeight: 'bold'}}>If we make a cool color scale, a glucose reading of {randomReading.value} would be this color.</h5>
            </div>
        );
    }
}

export default BGLSummary;
