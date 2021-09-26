import React ,{ FunctionComponent } from 'react';
import AppTopbar from '../../components/AppTopbar';

import './MainLayout.scss';

const MainLayout: FunctionComponent = () => {
    const className : string = 'main-layout';
    return (<div className ={className}>
        <div className = {`${className}_body`}>
        <AppTopbar></AppTopbar>
        </div>
    </div>)
}


export default MainLayout;