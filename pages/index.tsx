import React, { useState } from 'react';
import StockGraph from '../components/StockGraph';
import { alpha, axios } from '../api';
import Head from 'next/head';
import StockSeachBar from '../components/StockSeachBar';
import { Divider } from 'antd';

export default ({ assets, timeSeries }) => {
    const [currentAssetTicker, setAssetTicker] = useState(assets[0].ticker);
    const [timeSeriesData, setTimeSeriesData] = useState(timeSeries);

    const onChange = async (ticker) => {
        setAssetTicker(ticker);
        const data = await alpha.data.daily(ticker);
        const timeSeries = data["Time Series (Daily)"];
        setTimeSeriesData(timeSeries);
    }

    return (
        <>
            <Head>
                <title>Kapital</title>
            </Head>
            <div style={{ margin: "20px"}}>
                <StockSeachBar portfolio={assets} onChange={onChange} />
                <StockGraph data={timeSeriesData} assetTicker={currentAssetTicker} />
            </div>
        </>
    )
};


export const getServerSideProps = async (context) => {
    const assets = await axios.get('/portfolio')
        .then(res => res.data);

    const currentAssetTicker = assets[0].ticker;
    const data = await alpha.data.daily(currentAssetTicker);
    const timeSeries = data["Time Series (Daily)"];

    return { props: { assets, timeSeries } }
}