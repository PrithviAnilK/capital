import React, { FC } from 'react';
import { TableContainer, TableTag, Th, Td, Tr } from './Styled/Layout/TableComponents';
import Button from './Styled/Layout/DeleteButton';


interface Props {
    stocks: {
        id: string,
        label: string,
        value: number,
    }[]
    onClick: (idToDelete) => void
}

const Table: FC<Props> = ({ stocks, onClick }) => {
    return (
        <TableContainer>
            <TableTag>
                <thead>
                    <Tr>
                        <Th>Stock</Th>
                        <Th>%</Th>
                        <Th>Delete</Th>
                    </Tr>
                </thead>
                <tbody>
                    {stocks.map((stock: { id, label, value }) => (
                        <Tr key={stock.id}>
                            <Td>{stock.label}</Td>
                            <Td>{stock.value}%</Td>
                            <Td>
                                <Button onClick={() => onClick(stock.id)}>Delete</Button>
                            </Td>
                        </Tr>
                    ))}
                </tbody>
            </TableTag>
        </TableContainer>
    )
}

export default Table;