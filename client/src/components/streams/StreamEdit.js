import React from 'react';
import {connect} from 'react-redux';

import {fetchStream} from '../../actions';

class StreamEdit extends React.Component{

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    };

    render () {
        console.log(this.props.stream);
        return (
            <div>
                StreamEdit
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    return {stream: state.streams[id]}
}

export default connect(mapStateToProps, {fetchStream}) (StreamEdit);