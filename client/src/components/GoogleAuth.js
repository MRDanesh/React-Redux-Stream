import React from 'react';
import {connect} from 'react-redux';

import {signIn, signOut} from '../actions';

const KEY = '1030685946836-7bjoik1acvcetoql496u7p3iap7ike70.apps.googleusercontent.com'

class GoogleAuth extends React.Component {
        
    componentDidMount() {
        window.gapi.load('client: auth2', () => {
            window.gapi.client.init({
                clientId: KEY,
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    };

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthBotton = () => {
        if (this.props.isSignedIn) {
            return (
                <button 
                    className='ui red google button'
                    onClick = {() => this.onSignOutClick()}
                >
                    <i className='google icon'/>
                    Sign Out
                </button>
            );
        } else if (this.props.isSignedIn === null) {
            return null;
        } else {
            return (
                <button 
                    className='ui green google button'
                    onClick = {() => this.onSignInClick()}
                >
                    <i className='google icon'/>
                    Sign In
                </button>
            );
        }
    };

    render() {
        console.log(this.props.allState)
        return (
            <div>
                {this.renderAuthBotton()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        allState: state.auth
    };
;}

export default connect(mapStateToProps, {signIn, signOut}) (GoogleAuth);