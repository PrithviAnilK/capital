import styled from 'styled-components';

export default styled.button`
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
    padding-left: 12px;
    padding-right: 12px;
    font-weight: 500;
    background: #e16259;
    border: 1px solid #be5643;
    box-shadow: rgba(15, 15, 15, 0.1) 0px 1px 2px;
    margin: 0 auto;
    width: 100%;
    &:hover {
        background-color: #cf534a;
    }
    &:focus {
        outline: 0;
    }
`;