import styled from 'styled-components';

export const DetailWrapper = styled.div`
    over-flow: hidden;
    width:90%;
    margin:0 auto;
`;

export const Image = styled.img`
    width: 100%
`;

export const List = styled.table`
    float: left;
    width: 5%;
    border: 2px solid #000000;
    margin: 75px 10px;
    .top{
        border: 2px solid #000000;
        background: #33CCCC;
        text-align: left;
    }
    .middle{
        text-align: center;
    }
    .bottom{
        border: 2px solid #000000;
        text-align: left;
        cursor: pointer;
    }
`;

export const Info = styled.div`
    float: left;
    width: 75%;
    margin: 70px 100px;
    display: block;
    .bottom_line{
        border-bottom: 1px solid #000000;
    }
`;

export const InfoTitle = styled.div`
    display: block;
    width: 100%;
    background: #33CCFF;
    text-align: center;
    text-align: center;
    color: white;
    padding: 20px 0;
    font-size: 30px;
    margin-bottom: 20px;
`;

export const InfoSerach = styled.div`
    margin-top: 10px;
    float: left;
    display: block;
    width: 100%;
    text-align: left;
    .infoDataButton{
        float: right;
        border: 1px solid #000000;
        background: white;
    }
`;

export const InfoTableWrapper = styled.div`
    float: left;
    margin-top: 40px;
    display: block;
`;

export const InfoTableLine = styled.div`
    float: left;
    margin-right: 150px;
`;

export const InfoTable = styled.table`
    float: left;
    margin-right: 200px;
    width: 100%;
    border: 1px solid #000000;
    .item{
        width: 14%;
        text-align: center;
        padding-left: 10px;
        border: 1px solid #000000;
    }
`;

export const InfoOneLine = styled.p`
    float: left;
    margin-top: 30px;
`;

export const InfoOfSupplier = styled.div`
    margin-top: 30px;
`;