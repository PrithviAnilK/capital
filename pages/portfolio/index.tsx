import React from 'react';
import PieChart from '../../components/PieChart';
import Container from '../../components/Layout/Container';
import PortfolioContainer from '../../components/Layout/PortfolioContainer';
import PortfolioCardList from '../../components/PortfolioCardList';
import { axios } from '../../api';
import Head from 'next/head';

export default ({ assets }) => {
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
            </Head>
            <PortfolioContainer>
                <Container>
                    <PieChart portfolio={assets} />
                </Container>
                <Container>
                    <PortfolioCardList portfolio={assets} />
                </Container>
            </PortfolioContainer>
        </>
    )
}

export async function getStaticProps() {
    const assets = await axios.get('/portfolio')
        .then(res => res.data)
    return { props: { assets } }
}