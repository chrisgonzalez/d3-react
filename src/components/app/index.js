import React, { Component, PropTypes } from 'react';
import DataViz from 'containers/data-viz';
import BGLSummary from 'components/bgl-summary';

require('./app.scss');

class App extends Component {
    render() {
        return (
            <DataViz source='/src/data/blood-glucose.json'>
                <BGLSummary {...this.props} />
            </DataViz>
        );
    }
}

export default App;
