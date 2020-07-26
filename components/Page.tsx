import React from 'react';
import Header from './Navbar';
import Layout from './Layout';
import Content from './Content';


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