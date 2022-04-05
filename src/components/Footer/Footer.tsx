import React , { FC, useState } from 'react';
import { classNamesObject } from '../../containers/ClassNamesObject';

import classNames from 'classnames';
import SearchBar from '../Header/components/SearchBar';

import "./Footer.scss";

const Footer: FC<FooterProps> = ({input, setInput}: FooterProps) => {
    const className = "footer";
  const classNameFooter = classNames(className, classNamesObject());
  return (
    <div className={classNameFooter}><SearchBar input={input} setInput={setInput} /></div>
  )
}

export default Footer

interface FooterProps {
    input: string;
    setInput: (x: string) => void;
  }