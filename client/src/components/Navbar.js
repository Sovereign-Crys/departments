import React from 'react';
import { Menu, } from 'semantic-ui-react'
import { NavLink, } from 'react-router-dom';

const Navbar = () => (
    <Menu>
        <Menu.Item>
        <NavLink exact to="/" activeStyle={styles.active}>Home</NavLink>
        </Menu.Item>
        <Menu.Item>
        <NavLink exact to="/departments" activeStyle={styles.active}>Departments</NavLink>
        </Menu.Item>
    
    </Menu>
);

const styles = {
    active: {
        fontWeight: 'bold',
        color: 'green'    
    }
};

export default Navbar;