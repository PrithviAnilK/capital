import styled from 'styled-components';

export default styled.li`
    margin: 0 20px;   
    margin-left: ${props => props.end ? "auto":"30px"}; 
`;