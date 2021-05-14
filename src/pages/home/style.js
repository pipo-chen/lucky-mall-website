import styled from 'styled-components';
import HeadIcon from '../../assert/images/head.png'
export const Container = styled.div`
width:100%;
height:100%;
position: absolute;
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
export const LfetContainer = styled.div`
position:relative;
top:0;
left:0;
height:100%;
width: 200px;
background:#1E2E3D;
border-right: 1px solid blue;
`
export const LeftNav = styled.ul`
margin:0;
padding:0;
font-size: 20px;
`
export const LeftItem = styled.li`
padding: 20px;
line-height: 56px;
border:1px solid red;
color: white;
`

