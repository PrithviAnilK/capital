import React, { useState } from 'react';
import Header from '../components/Header';
import Title from '../components/Styled/Layout/MainTitle';
import InnerTitle from '../components/Styled/Layout/InnerTitle';
import PieChart from '../components/PieChart';
import InputContainer from '../components/Styled/Layout/InputContainer';
import Input from '../components/Styled/Layout/Input';
import FormContainer from '../components/Styled/Layout/FormContainer';
import FormLabel from '../components/Styled/Layout/FormLabel';
import Button from '../components/Styled/Layout/SubmitButton';
import Table from '../components/Table';
import Container from '../components/Styled/Layout/Container';
import PortfolioContainer from '../components/Styled/Layout/PortfolioContainer';
import ContainerItem from '../components/Styled/Layout/ContainerItem';

export default () => {
    const [stocks, setStocks] = useState([]);
    const [stock, setStock] = useState("");
    const [percent, setPercent] = useState("");
    const [totalPercent, setTotalPercent] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault();
        const parsed_percent = parseFloat(percent);
        if (isNaN(parsed_percent) || stock === "" || percent === "" || (totalPercent + parsed_percent > 100)) return;
        setTotalPercent(totalPercent + parsed_percent);
        setStocks([...stocks, { id: stock, label: stock, value: parsed_percent }]);
        setStock("");
        setPercent("");
    }

    const deleteStock = (idToDelete) => {
        setStocks(stocks.filter((stock: { id }) => stock.id !== idToDelete));
    }

    return (
        <div>
            <Header />
            <div>
                <Title fontSize={"40px"}>My Portfolio</Title>
                <PortfolioContainer>
                    <Container>
                        <PieChart data={stocks} />
                    </Container>
                    <Container>
                        <ContainerItem>
                            <Table stocks={stocks} onClick={deleteStock} />
                        </ContainerItem>
                        <ContainerItem>
                            <FormContainer>
                                <InnerTitle fontSize={"30px"}>
                                    Add a new stock
                                </InnerTitle>
                                <form onSubmit={(e) => onSubmit(e)}>
                                    <FormLabel>Stock</FormLabel>
                                    <InputContainer>
                                        <Input type="text" placeholder="TSLA" value={stock} onChange={(e) => setStock(e.target.value)} />
                                    </InputContainer>
                                    <FormLabel>Percent</FormLabel>
                                    <InputContainer>
                                        <Input type="text" placeholder="69%" value={percent} onChange={(e) => setPercent(e.target.value)} />
                                    </InputContainer>
                                    <Button type="submit">Submit</Button>
                                </form>
                            </FormContainer>
                        </ContainerItem>
                    </Container>
                </PortfolioContainer>
            </div>
        </div>
    )
}
