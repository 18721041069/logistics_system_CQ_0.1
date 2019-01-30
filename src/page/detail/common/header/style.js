import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    float: hidden;
    width: 90%;
    margin: 0px auto;
`;

export const TitleWrapper = styled.div`
    over-flow: hidden;
    height: 70%;
    margin: 10px auto;
    text-align: center;
    border-bottom: 2px solid black;
    padding-bottom: 10px;
`;

export const Title = styled.div`
    color: #33CCFF;
    font-size: 50px;
`;

export const ButtonWrapper = styled.div`
    margin:30px auto;
    border-bottom: 2px solid black;
`;

export const Button = styled.div`
    float: left;
    height: 30px;
    margin: 10px 40px;
    padding: 5px 20px;
    border: 1px solid #000000;
    font-size: 14px;
    vertical-align: middle;
    color: #000000;
    &.right{
        float: right;
    }
    &.active{
        color:white;
        background: dodgerblue;
    }
`;