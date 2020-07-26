import React from 'react';
import { Input, InputNumber, Button } from 'antd';
import Form from '../components/Form';
import { DollarOutlined, BankOutlined } from '@ant-design/icons';
import { axios } from '../api';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default () => {
    const Router = useRouter();
    const [form] = Form.useForm();

    const onSubmit = async (values) => {
        const { ticker, percent, name, notes } = values;
        await axios.post('/portfolio', { ticker, percent, name, notes });
        Router.push('/portfolio');
        form.resetFields();
    }

    return (
        <>
            <Head>
                <title>Kapital</title>    
            </Head> 
            <Form onFinish={onSubmit} form={form}>
                <Form.Item name="ticker" label="Asset Ticker">
                    <Input placeholder="TSLA" prefix={<DollarOutlined />} />
                </Form.Item>
                <Form.Item name="name" label="Company Name">
                    <Input placeholder="Tesla" prefix={<BankOutlined />} />
                </Form.Item>
                <Form.Item name="notes" label="Notes">
                    <Input.TextArea rows={4} placeholder="High Risk..." />
                </Form.Item>
                <Form.Item name="percent" label="Portfolio Percentage">
                    <InputNumber
                        defaultValue={69}
                        min={0}
                        max={100}
                        formatter={value => `${value}%`}
                        parser={value => value.replace('%', '')}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Add Asset</Button>
                </Form.Item>
            </Form>
        </>
    )
}