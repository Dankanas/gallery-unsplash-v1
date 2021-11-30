import React, { FC } from 'react'

import './NavigationBar.scss'
import Icon from '../Icon';
import { IconName } from '../../types/IconName';

const NavigationBar : FC<NavigationBarProps> = ({ NavigationItems }: NavigationBarProps) => {
    const className = 'navigation-bar';
    return <div className={className} >{
        NavigationItems.map((item, index) => (<div className={`${className}_item`}><Icon name = {item.name}></Icon></div>))
    }</div>
}

export default NavigationBar

interface NavigationBarProps {
    NavigationItems: NavigationItem[]
}

interface NavigationItem {
    name: IconName;
    route?: string;
}