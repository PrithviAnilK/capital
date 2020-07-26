import React from 'react';
import List from './NavList';
import Item from './NavItem';
import Nav from './Nav';
import Link from './NavLink';
import { PieChartOutlined } from '@ant-design/icons';

export default () => {
    return (
        <Nav>
            <List>
                <Item>
                    <Link href="/">
                        Kapital
                    </Link>
                </Item>
                <Item endWhenMobile = "true">
                    <Link href="/portfolio">
                        <PieChartOutlined />
                    </Link>
                </Item>
            </List>
        </Nav>
    )
}