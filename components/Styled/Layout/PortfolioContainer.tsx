import styled from 'styled-components';

export default styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: space-around;
    @media (max-width: 800px) {
        margin-top: 0;
        flex-direction: column;
    }
`;
