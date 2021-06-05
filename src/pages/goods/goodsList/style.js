import styled  from 'styled-components'
import LastIcon from '../../../assert/images/shangyiye_1.png'
import NextIcon from '../../../assert/images/xiayiye_1.png'
import SelectIcon from '../../../assert/images/select.png'
import NoSelectIcon from '../../../assert/images/no-select.png'

export const ShowContainer = styled.div`
width: 96%;
margin-left:2%;
background-color: white;
padding-top:50px;
`

export const Table = styled.table`
width: 90%;
margin-left:5%;
border-spacing: 0;
text-align:center;

.table-head {
    background-color:#F4F4F7;
    height:55px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #191F25;
}
tr {
    border-bottom: 1px solid red;
    
    
}
td {
    width:200px;
    font-size: 14px;
    height: 60px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(25, 31, 37, 0.75);
    border-bottom: 1px solid rgba(25, 31, 37, 0.08);;
    &.circle {
        background: red;
        width:20px;
        height: 20px;
    }

}
td img {
    width:50px;
    height:50px;
}
`

export const BottomContainer = styled.div`
width: 96%;
margin-left:2%;
margin-top:100px;
p {
    display: inline-block;
}

`
export const PageButton = styled.button`
width: 30px;
height: 30px;
background-color: white;
background-repeat:no-repeat;
background-position:0;
background-size: 30px 30px;
background-image:url(${NextIcon});
border: 0;
margin: 0px 30px;
&p {
    color: red;
}
&.last-page {
    margin-left:40%;
    background-image:url(${LastIcon});
}
`

export const CheckButton = styled.button`
width: 20px;
height: 20px;
border-width: 0px;
background-image: url(${NoSelectIcon});
background-size: 100%;
background-color:white;
&.selected {
    background-image: url(${SelectIcon});
}
`
export const PButton = styled.span`
font-size: 14px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #1890FF;
line-height: 20px;
margin: 0 10px;
`