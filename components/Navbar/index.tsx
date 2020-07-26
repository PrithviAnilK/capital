import React from 'react';
import List from './NavList';
import Item from './NavItem';
import Nav from './Nav';
import Link from './NavLink';
import { SettingOutlined, DollarOutlined, StockOutlined } from '@ant-design/icons';

export default () => {
    return (
        <Nav>
            <List>
                <Item>
                    <Link href="/">
                        Kapital
                        {/* <StockOutlined /> */}
                    </Link>
                </Item>
                <Item>
                    <Link href="/portfolio">
                        <DollarOutlined />
                    </Link>
                </Item>
                <Item end="true">
                    <Link href="/settings">
                        <SettingOutlined />
                    </Link>
                </Item>
            </List>
        </Nav>
    )
}