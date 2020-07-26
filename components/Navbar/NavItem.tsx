import styled from 'styled-components';

export default styled.li`
    margin: 0 20px; 
    @media (max-width: 768px) {
        margin-left: ${props => props.endWhenMobile ? "auto":"20px"};  
	}
`;