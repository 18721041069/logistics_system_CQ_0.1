import styled from 'styled-components';
//import loginPic from '../../statics/images/login_img.png';

export const LoginWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: block;
    background-size: cover;
`;

export const LoginTitle = styled.div`
    width: 100%;
    margin: 100px auto;
    font-size: 50px;
    color: blue;
    text-align: center;
`;

export const LoginBox = styled.div`
    width: 350px;
    height: 250px;
    margin: 10px auto 50px auto;
    padding-top: 20px;
    background: #fff;
`;

export const LoginBoxTitle = styled.div`
    width: 100%;
    margin: 10px auto;
    font-size: 30px;
    text-align: center;
`;

export const InputWrapper = styled.div`
    over-flow: hidden
`;

export const InputTitle = styled.div`
    float: left;
    width: 100%;
    margin-right: 10px;
    font-size: 15px;
`;

export const Input = styled.input`
    float: left;
    display: block;
    width: 200px;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    margin: 10px auto;
    color: #777;
`;

export const Button = styled.div`
    width: 220px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    background: #3194d0;
    border-radius: 15px;
    margin: 10px auto;
    text-align: center;
    cursor: pointer;
`;
