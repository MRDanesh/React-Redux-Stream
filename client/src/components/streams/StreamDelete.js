import React from 'react';
import {connect} from 'react-redux';

import history from '../../history';
import Modal from '../Modal';
import {fetchStream, deleteStream} from '../../actions';

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    };

    actions = () => {
        return (
            <React.Fragment>
                <button onClick={() => history.push('/')} className='ui button'>Cancel</button>
                <button onClick={() => this.props.deleteStream(this.props.match.params.id)} className='ui negative button'>Delete</button>
            </React.Fragment>
        );
    };
    render(){
        return (
            <div>
                StreamDelete
                <Modal
                    title = 'Delete Stream'
                    content = {`Are you sure you want to delete ${this.props.stream? `${this.props.stream.title}` : null}`}
                    actions = {this.actions()}
                    onDismiss = {() => history.push('/')}
                />
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    return {stream: state.streams[id]} 
};

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);