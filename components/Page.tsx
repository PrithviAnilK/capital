import React from 'react';
import Header from './Navbar';
import Layout from './Layout';
import Content from './Content';
import Head from 'next/head';


const Page = ({ children }) => {
    return (
        <Layout>
            <Header />
             <Content>
                {children}
            </Content>
        </Layout>
    )
}

export default Page;