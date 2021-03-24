import React from 'react';
import {Link} from 'react-router-dom';

import GoogleAuth from './GoogleAuth';


const Header = () => {
    return (
        <div className="ui clearing segment">
            <Link to='/' className="ui right floated header">
                streams
            </Link>
            <Link to='/' className="ui left floated header">
                Streamy
            </Link>
            <GoogleAuth className="ui left floated header"/>
        </div>
    );
};

export default Header;