import React, { Component, PropTypes } from 'react';
import DataViz from 'containers/data-viz';
import BGLSummary from 'components/bgl-summary';
import BGLVisualization from 'components/bgl-visualization';
import Map from 'components/map';

require('./app.scss');

class App extends Component {
    render() {
        return (
            <div>
                <DataViz source='/src/data/blood-glucose.json'>
                    <BGLSummary {...this.props} />
                    <BGLVisualization {...this.props} />
                </DataViz>

                <DataViz source='/src/data/us.states.json'>
                    <Map />
                </DataViz>
            </div>
        );
    }
}

export default App;
