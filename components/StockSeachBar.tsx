import React, { FC } from 'react';
import { Select } from 'antd';

const { Option } = Select;

interface Props {
    portfolio: {
        ticker: string,
        percent: number,
        name: String,
        notes: String
    }[],
    onChange: (asset) => void;
}


const StockSearchBar: FC<Props> = ({ portfolio, onChange }) => {
    return (
        <Select
            showSearch
            style={{ width: "100%", marginBottom: "20px" }}
            placeholder="Select a Stock"
            optionFilterProp="children"
            onChange={(asset) => onChange(asset)}
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
        >
            {portfolio.map((asset, dex) => (
                <Option key={dex} value={asset.ticker}>{asset.name}</Option>
            ))}
        </Select>
    )
}

export default StockSearchBar;