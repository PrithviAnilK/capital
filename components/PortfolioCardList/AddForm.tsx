import React from 'react';
import { Input, InputNumber, Button, Divider } from 'antd';
import { DollarOutlined, BankOutlined } from '@ant-design/icons';

import styled from 'styled-components';
import { Form } from 'antd';

const AddForm = styled(Form)`
    width: 100%;
    margin: 0 auto;
`;

export default ({ onSubmit, setVisible }) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        form.resetFields();
        onSubmit(values);
        setVisible(false);
    }

    return (
        <AddForm onFinish={onFinish} form={form}>
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
            <Divider />
            <Form.Item>
                <Button type="primary" htmlType="submit">Add Asset</Button>
            </Form.Item>
        </AddForm>
    )
}