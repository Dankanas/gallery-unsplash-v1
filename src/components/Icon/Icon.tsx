import React ,{ FC } from 'react';

import './icon.scss';
import { IconName } from '../../types/IconName';
import HeartfullIcon from './components/Heartfull.icon';
import HeartIcon from './components/Heart.icon';
import ImageIcon from './components/Image.Icon';
import SearchIcon from './components/Search.Icon';

const Icon : FC<IconProps> = ({name} : IconProps) => {
    const className = 'icon';
    switch (name) {
        case 'heart':
            return (<div className = {className}><HeartIcon/></div>);
            break;
        case 'heart-full':
            return (<div className = {className}><HeartfullIcon/></div>);
            break;
        case 'image':
            return (<div className = {className}><ImageIcon/></div>);
            break;
        case 'search':
                return (<div className = {className}><SearchIcon/></div>);
                break;
        
    }
    

}

export default Icon;

export interface IconProps {
    name: IconName
}

