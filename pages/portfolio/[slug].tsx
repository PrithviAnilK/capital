import React from 'react';
import { Button, Card, Divider, Modal, Statistic, Typography } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { alpha, axios } from '../../apis';
const { Title } = Typography;

const { confirm } = Modal;

// https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


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

    const price = GQ['05. price'];
    const volume = GQ['06. volume'];
    // const typesOfQuotes = [
    //     '02. open', 
    //     '03. high', 
    //     '04. low', 
    //     '05. price', 
    //     '06. volume', 
    //     '07. latest trading day', 
    //     '08. previous close'
    // ];
    const changep = parseFloat(GQ['10. change percent']);
    return (
        <Card bordered={true} style={{ margin: "20px" }}>
            <Title>
                {name}
                {" "}
                <span style={{ color: "gray" }}>{ticker}</span>
                {" "}
            </Title>
            <span style={{ color: "gray", fontSize: "25px"}}>{percent}%</span>
            <Card>
                <Statistic title="Price" value={price} />
                <Statistic title="Volume" value={volume} />
                <Statistic
                    title="Change"
                    value={changep}
                    precision={2}
                    valueStyle={{ color: changep > 0 ? "green" : "red" }}
                    prefix={changep > 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                    suffix="%"
                />
            </Card>
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
