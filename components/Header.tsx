import React from 'react';
import List from './Styled/Navbar/NavList';
import Item from './Styled/Navbar/NavItem';
import Nav from './Styled/Navbar/Nav';
import Link from './Styled/Navbar/NavLink';

export default () => {
    return (
        <Nav>
            <List>
                <Item>
                    <Link href="/">Kapital</Link>
                </Item>
                <Item>
                    <Link href="/capm">CAPM</Link>
                </Item>
                <Item end = "true">
                    <Link href="/portfolio">My Portfolio</Link>
                </Item>
            </List>
        </Nav>
    )
}