import React, { FC } from 'react';

import './AppTopbar.scss'
import TopbarLogo from './TopbarLogo';

const AppTopbar : FC = () => {
    const className = 'app-topbar'
    return (<div className={className}> <TopbarLogo /></div>)
}

export default AppTopbar;