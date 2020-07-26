import { Button, Modal, Space, Table } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons'
import React, { FC, useState } from 'react';
import AddModal from './AddModal';
import Container from './Container';
const { confirm } = Modal;


interface Props {
    portfolio: {
        ticker: string,
        percent: number,
        name: String,
        notes: String
    }[],
    onSubmit: (values) => void,
    deleteAsset: (ticker) => void;
}

const PortfolioCardList: FC<Props> = ({ portfolio, onSubmit, deleteAsset }) => {
    const [addModalVisible, setVisible] = useState(false);

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
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    const columns = [
        {
            title: 'Ticker',
            dataIndex: 'ticker',
            key: 'ticker',
            render: text => <a href={`/portfolio/${text}`}>{text}</a>,
            sortDirections: ['descend'],
            sorter: (a, b) => a.ticker < b.ticker,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '%',
            dataIndex: 'percent',
            key: 'percent',
            render: text => `${text}%`,
            sortDirections: ['descend', 'ascend'],
            sorter: (a, b) => a.percent - b.percent,
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a style={{ color: "red" }} onClick={() => showDeleteConfirm(record.ticker)} >
                        Delete
                </a>
                </Space>
            ),
        },
    ];


    const dataSource = portfolio.map((asset, key) => ({...asset, key}));
    return (
        <Container>
            {/* @ts-ignore */}
            <Table columns={columns} dataSource={dataSource} />
            <Button block onClick={() => setVisible(true)}>
                Add Asset
            </Button>
            <AddModal
                visible={addModalVisible}
                setVisible={setVisible}
                onSubmit={onSubmit}
            />
        </Container>
    )
}

export default PortfolioCardList;