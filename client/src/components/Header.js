import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui clearing segment">
            <Link to='/' className="ui right floated header">
                Go Forward
            </Link>
            <Link to='/' className="ui left floated header">
                Go Back
            </Link>
        </div>
    );
};

export default Header;