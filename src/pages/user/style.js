import styled from 'styled-components';

export const ShowContainer = styled.div`
width: 96%;
margin-left:2%;
background-color: white;
margin-top:20px;
padding-top: 50px;
`
export const Circle = styled.div`

width: 14px;
height: 14px;
border-radius: 7px;
display: inline-block;
&.red {
    background: red;
}
&.green {
    background: green;
}
`

export const Container = styled.div`

width: 100%;
height:100%;
background-color:#F7F8FA;
margin: 0px;
p {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(25, 31, 37, 0.5);
    line-height: 22px;
}
`

export const TopContainer = styled.div`
height: 43px;
width:100%;
background-color: white;
p {
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #1890FF;
    line-height: 40px;
    margin-left:30px;
}
`