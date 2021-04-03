import React from 'react';
import './style.css';

import { Link } from 'react-router-dom';

const Logo = props => {
    return (
        <Link to="/">
            <center>
                <img src="https://www.freelogoservices.com/api/main/images/1j+ojlxKOMkX9WyteRe4hGfR37Pc9UQexl3bizxmDWVSllou1nU2wqo+7o9uaVkWvQhfjhMHe884jyxtEdlBgRpzoWrKNIpVHiAnj29RWugBGnctdRPQEPiK+BV4mOVY1MwVpRSbDWj7C2DbNNA4KoOCtoxzE5wrnWvePyow7S16TrpVLtufW8ItjYGgUucf5m3IVdVRerU="  />
                {/* <span>Haulicans Shop</span> */}
            </center>
        </Link>
        
    );
}

export default Logo;