import React from 'react';

const KEY = '1030685946836-7bjoik1acvcetoql496u7p3iap7ike70.apps.googleusercontent.com'

class GoogleAuth extends React.Component {
    
    state = {isSignedIn : null};
    
    componentDidMount() {
        window.gapi.load('client: auth2', () => {
            window.gapi.client.init({
                clientId: KEY,
                scope: 'email'
            }).then(() => {
                this.a = 2;
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    };

    onAuthChange = () => {
        this.setState({isSignedIn: this.auth. isSignedIn.get()});
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthBotton = () => {
        if (this.state.isSignedIn) {
            return (
                <button 
                    className='ui red google button'
                    onClick = {() => this.onSignOutClick()}
                >
                    <i className='google icon'/>
                    Sign Out
                </button>
            );
        } else if (this.state.isSignedIn === null) {
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
        return (
            <div>
                {this.renderAuthBotton()}
            </div>
        );
    }
}

export default GoogleAuth;