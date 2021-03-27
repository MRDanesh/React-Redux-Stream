import React from 'react';
import {connect} from 'react-redux'

class StreamEdit extends React.Component{
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

export default connect(mapStateToProps) (StreamEdit);