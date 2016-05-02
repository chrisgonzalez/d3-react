import React, { Children, Component, PropTypes, cloneElement } from 'react';
import { connect } from 'react-redux';
import { startFetching, doneFetching, errorFetching, fetchSource } from 'actions/fetch-data';

class DataViz extends Component {
    constructor(props) {
        super(props);
    }

    hasSource() {
        return this.props.hasOwnProperty('source') && this.props.source !== '';
    }

    componentDidMount() {
        if (this.hasSource()) {
            this.props.fetchSource(this.props.source);
        }
    }

    render() {
        console.log('data', this.props.data);
        return (
            <div className="data-viz">
                {React.cloneElement(this.props.children, {data: this.props.data})}
            </div>
        )
    }
}

DataViz.defaultProps = {
    data: null
}

function mapStateToProps(state, ownProps) {
    const { source } = ownProps;

    return {
        data: source &&
              state.data &&
              state.data[source] &&
              state.data[source].data || []
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchSource: (source) => dispatch(fetchSource(source))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DataViz);
