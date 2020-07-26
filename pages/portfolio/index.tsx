import React, { useState } from 'react';
import PieChart from '../../components/PieChart';
import Container from '../../components/Layout/Container';
import PortfolioContainer from '../../components/Layout/PortfolioContainer';
import PortfolioCardList from '../../components/PortfolioCardList';
import { axios } from '../../api';
import Head from 'next/head';

export default ({ initAssets }) => {
    const [assets, setAssets] = useState(initAssets);

    const onSubmit = async (values) => {
        const { ticker, percent, name, notes } = values;
        await axios.post('/portfolio', { ticker, percent, name, notes });
        setAssets([...assets, values]);
    }

    const deleteAsset = (ticker) => {
        axios.delete(`portfolio/${ticker}`);
        setAssets(assets.filter((asset: {ticker}) => asset.ticker != ticker));
    }

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
                    <PortfolioCardList portfolio={assets} onSubmit={onSubmit} deleteAsset={deleteAsset} />
                </Container>
            </PortfolioContainer>
        </>
    )
}

export async function getStaticProps() {
    const initAssets = await axios.get('/portfolio')
        .then(res => res.data)
    return { props: { initAssets } }
}