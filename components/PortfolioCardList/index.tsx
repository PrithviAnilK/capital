import React, { FC } from 'react';
import { Card, Button } from 'antd';
import Container from './Container';

interface Props {
    portfolio: {
        ticker: string,
        percent: number,
        name: String,
        notes: String
    }[]
}


const PortfolioCardList: FC<Props> = ({ portfolio }) => {
    return (
        <Container>
            <Card title={<h1>My Portfolio</h1>}>
                {portfolio.map((asset, dex) => (
                    <Card.Grid key={dex}>
                        <div style={{ fontWeight: "bold" }}>
                            <a style={{ fontSize: "20px" }} href={`/portfolio/${asset.ticker}`}>
                                {`${asset.ticker}`}
                            </a>
                        </div>
                        <div>
                            <div style={{ fontWeight: "bold" }}>
                                Name : {" "}
                                <span style={{ fontWeight: "initial" }}>
                                    {asset.name}
                                </span>
                            </div>
                            <div style={{ fontWeight: "bold" }}>
                                Portfolio Percentage : {" "}
                                <span style={{ fontWeight: "initial" }}>
                                    {asset.percent}%
                                </span>
                            </div>
                        </div>
                    </Card.Grid>
                ))}
            </Card>
            <Button block>
                <a href="/add">
                    Add Asset
                </a>
            </Button>
        </Container>
    )
}

export default PortfolioCardList;