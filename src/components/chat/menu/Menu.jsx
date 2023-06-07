import React from 'react';
import Header from './Header';
import Search from './Search';
import { Component } from '../../../styles/menuStyles';

const Menu = () => {
  return (
    <Component>
        <Header />
        <Search />
    </Component>
  )
}

export default Menu