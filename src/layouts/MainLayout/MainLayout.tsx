import React ,{ FunctionComponent } from 'react';

import './MainLayout.scss';

const MainLayout: FunctionComponent = () => {
    const className : string = 'main-layout';
    return (<div className ={className}>
        <div className = {`${className}_body`}></div>
    </div>)
}


export default MainLayout;