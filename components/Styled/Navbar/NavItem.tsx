import styled from 'styled-components';

export default styled.li`
    margin: 0 30px;
    margin-left: ${props => props.end ? "auto":"10px"};
`;