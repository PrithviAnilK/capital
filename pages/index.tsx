import React from 'react';
import StockGraph from '../components/StockGraph';
import { alpha, axios } from '../api';
import Head from 'next/head';

export default ({ assets, timeSeries }) => {
    return (
        <>
            <Head>
                <title>Kapital</title>
            </Head>
            <div style={{ height: "600px" }}>
                <StockGraph data={timeSeries} />
            </div>
        </>
    )
};


export const getStaticProps = async (ctx) => {
    const assets = await axios.get('/portfolio')
        .then(res => res.data);
    const data = await alpha.data.daily('msft');

    const timeSeries = data["Time Series (Daily)"];
    console.log(timeSeries);

    return { props: { assets, timeSeries } }
}