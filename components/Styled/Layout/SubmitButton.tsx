import styled from 'styled-components';

export default styled.button`
    width: 100%;
    text-align: center;
    user-select: none;
    transition: background 120ms ease-in 0s;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    height: 36px;
    border-radius: 3px;
    color: #fff;
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    background: #21ba45;
    border: 1px solid #21ba45;
    box-shadow: rgba(15, 15, 15, 0.1) 0px 1px 2px;
    margin-bottom: 4px;
    margin: 0 auto;
    width: 100%;
    &:hover {
        background-color: #16ab39;
    }
    &:focus {
        outline: 0;
    }
`;