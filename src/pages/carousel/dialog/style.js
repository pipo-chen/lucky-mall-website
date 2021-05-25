import styled from 'styled-components';

export const Back = styled.div`
width: 100%;
height: 100%;
background:  rgba(0, 0, 0, 0.7);
position: absolute;
top: 0;
left: 0;
z-index: 999;
border: 1px solid black;
color: white;

table{
    width: 500px;
    height: 300px;
    margin: auto;
    margin-top: 200px;
    border: 1px solid white;
    padding:30px;
    background: white;
}
`
export const SelectButton = styled.button`
border-radius: 4px;
border: 1px solid #D8D8DD;
width: 76px;
height: 32px;
font-size: 14px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #191F25;
margin-right:16px;
&.save {
    background-color:#1890FF;
    color:white;
    border-width: 0;
}
`