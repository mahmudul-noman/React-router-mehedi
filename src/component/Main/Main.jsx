import React from 'react';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;