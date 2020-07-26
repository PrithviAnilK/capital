import React from 'react';
import { useRouter } from 'next/router';
import { Button, Card, Divider, Modal, Descriptions } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import MainTitle from '../../components/Layout/MainTitle';
import { alpha, axios } from '../../api';

const { confirm } = Modal;


export default ({ asset, currentPrices }) => {
    const Router = useRouter();

    const showDeleteConfirm = (ticker) => {
        confirm({
            title: `Are you sure remove ${ticker} from your portfolio?`,
            icon: <ExclamationCircleOutlined />,
            content: 'This data cannot be retrieved!',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                deleteAsset(ticker);
                Router.push('/portfolio');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    
    const deleteAsset = (ticker) => {
        axios.delete(`portfolio/${ticker}`);
    }
    
    const { ticker, name, notes, percent } = asset;
    const GQ = currentPrices['Global Quote'];
    const typesOfQuotes = ['02. open', '03. high', '04. low', '05. price', '06. volume', '07. latest trading day', '08. previous close', '09. change', '10. change percent'];
    const data = typesOfQuotes.map((typeOfQuote) => GQ[typeOfQuote]);

    return (
        <Card title={<h1>{ticker}</h1>} bordered={false} style={{ width: "90%", margin: "20px auto" }}>
            <MainTitle>{name}</MainTitle>
            <h1>
                <label>Price: {" "}</label>
                ${data[3]}
            </h1>
            <h1>
                <label>Percent Of Portfolio: {" "}</label>
                {percent}%
            </h1>
            <h1>
                <label>Open: {" "}</label>
                ${data[0]}
            </h1>
            <h1>
                <label>High: {" "}</label>
                ${data[1]}
            </h1>
            <h1>
                <label>Low: {" "}</label>
                ${data[2]}
            </h1>
            <h1>
                <label>Volume: {" "}</label>
                {data[4]}
            </h1>
            <h1>
                <label>Change: {" "}</label>
                {data[7]}
            </h1>
            <h1>
                <label>% Change: {" "}</label>
                {data[8]}
            </h1>
            <Divider />
            <div>
                <h1>Notes: {" "}</h1>
                {notes}
            </div>
            <Divider />
            <Button type="primary" danger onClick={() => showDeleteConfirm(ticker)}>
                Delete the asset
            </Button>
        </Card>
    )
}

export const getServerSideProps = async (context) => {
    const slug = context.params.slug;
    const data = await axios.get(`/portfolio/${slug}`)
        .then(res => res.data);
    const currentPrices = await alpha.data.quote(`${slug}`);
    return {
        props: { asset: data, currentPrices }
    }
}
