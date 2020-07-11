import styled from 'styled-components';

export const TableContainer = styled.div`
    width: 100%;
    border-width: .2rem .2rem 0;
    border-radius: 8px 8px 0 0;
    position: relative;
    padding: 1rem;
    border: .2rem solid #ececec;
    border-radius: 8px;
    margin-bottom: 30px;
    color: #212529;
`;

export const TableTag = styled.table`
    text-align: center;
    border: 1px solid #dee2e6; 
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
    border-collapse: collapse;
`;

export const Th = styled.th`
    padding: .75rem; 
`;

export const Tr = styled.tr`
    background-color: #0000000d;
`;

export const Td = styled.td`
    border: 1px solid #dee2e6;
    padding: .75rem;
    vertical-align: top;
`;