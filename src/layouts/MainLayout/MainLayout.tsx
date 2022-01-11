import React , { ReactNode , FunctionComponent } from 'react';
import AppTopbar from '../../components/AppTopbar';

import './MainLayout.scss';
import ImageModalContainer from '../../containers/ImageModal.container';

const MainLayout: FunctionComponent = ({children} : MainLayoutProps) => {
    const className : string = 'main-layout';
    return (<div className ={className}>
        <ImageModalContainer/> 
        <div className = {`${className}_body`}>
        <AppTopbar></AppTopbar>
        <div className = {`${className}_content`}>{children}</div>
        </div>
        
    </div>)
}

interface MainLayoutProps {
    children: React.ReactChildren;
}


export default MainLayout;