import React from 'react';

import logo from 'admin-lte/dist/img/AdminLTELogo.png';

function Preloader(params) {
    return (
        <div>
            <div className="preloader flex-column justify-content-center align-items-center">
                <img className="animation__shake" src={logo} alt="AdminLTELogo" height="60" width="60" />
            </div>
        </div>
    );
}

export default Preloader;