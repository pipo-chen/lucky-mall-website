import styled from 'styled-components';
import HeadIcon from '../../assert/images/head.png'
import GoodsIcon from '../../assert/images/chanpin.png'
import UserIcon from '../../assert/images/user.png'
import HomeIcon from '../../assert/images/home.png'
import OrderIcon from '../../assert/images/dingdan.png'
import DataIcon from '../../assert/images/RectangleCopy.png'

export const Container = styled.div`
width:100%;
height:100%;
position: absolute;
background-color:white;
top: 0;
left: 0;
`
export const TopContainer = styled.div`
height: 56px;
width:85%;
background: #FFFFFF;
box-shadow: 0px 1px 0px 0px #E5E5EA;
position:absolute;
left:15%;
top:0;
p {
    line-height:22px;
    margin-left: 16px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #191F25;
}
`
export const RightContainer = styled.div`
position: absolute;
left: 15%;
top:56px;
width: 85%;
`
export const LfetContainer = styled.div`
position:relative;
top:0;
left:0;
height:100%;
width: 15%;
padding-top:40px;
background:#1E2E3D;
box-shadow: 0px 1px 0px 0px #E5E5EA;
`
export const HeadDiv = styled.div`
position: relative;
width: 100%;
color:white;
text-align: center;
`

export const HeadLogo = styled.a`
position: relative;
top: 0;
margin: 0 auto;
margin-bottom:20px;
display: block;
width:56px;
height: 56px;
background: url(${HeadIcon});
background-size: contain;
`

export const LeftNav = styled.ul`

margin-top:40px;
padding:0;
font-size: 20px;
`
export const LeftItem = styled.li`
&:hover {
    background-color: #1890FF;
}
height: 36px;
opacity: 0.8;
line-height:36px;
padding:16px 0px;
font-size: 14px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #FFFFFF;
text-align:center;
background-repeat:no-repeat;
background-position:30px 26px;
background-size: 22px auto;

&.icon-user {
    background-image:url(${UserIcon});
}
&.icon-analyse {
    background-image:url(${OrderIcon});
}
&.icon-statistic {
    background-image:url(${DataIcon});
}
&.icon-goods{ 
    background-image:url(${GoodsIcon});
}

&.icon-order {
    background-image:url(${OrderIcon});
}
&.icon-home {
    background-image:url(${HomeIcon});

}
&.icon-light {
    background-color:red;
}
&::hover {
    background-color:red;    
}

`

