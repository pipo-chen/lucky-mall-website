import styled from 'styled-components';
import loginPic from '../../assert/images/login-background.png'

export const Container = styled.div`
position: absolute;
height:100%;
width:100%;
background-color:#55A2EB;
`
export const BGImg = styled.div`
background:url(${loginPic});
position: absolute;
left:97px;
top:192px;
height:600px;
width:485px;
background-repeat:no-repeat;
background-size: contain;
`
export const Top = styled.div `
font-size: 20px;
color: white;
line-height:20px;
position:relative;
top: 20px;
left: 50px;
`
export const LoginBox = styled.div`
width:413px;
height: 470px;
float:right;
margin-right: 64px;
margin-top:200px;
background:#FFFFFF;
border-radius:14px;
box-shadow: 0 0 8px rgba(0,0,0,.1);
.title {
    width: 96px;
    height: 33px;
    font-size: 24px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #191F25;
    line-height: 33px;
    margin: 74px 0px 0px 48px;
}
a {
    height: 19px;
    font-size: 14px;
    font-family: Helvetica;
    color: #1890FF;
    line-height: 19px;
    text-decoration:none;
    float: right;
    margin-right:49px;
}
`;

export const Input = styled.input`
width: 316px;
height: 40px;
background: #FFFFFF;
border-radius: 4px;
border: 1px solid #D8D8DD;
margin-left: 49px;
margin-top:24px;
padding-left:10px;
font-size: 14px;
font-family: Helvetica;
color: rgba(25, 31, 37, 0.5);
line-height: 19px;
`

export const Button = styled.button`
width: 327px;
height: 48px;
background:#1890FF;
border-radius: 4px;
text-align: center;
margin-top:24px;
margin-left:49px;
color: white;
border-width: 0px;
`

