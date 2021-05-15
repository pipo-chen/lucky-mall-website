import styled  from 'styled-components'
import ArriveIcon from '../../assert/images/shangjia.png'
import SoleOutIcon from '../../assert/images/xiajia.png'
import AddIcon from '../../assert/images/tianjia.png'
import ChangeIcon from '../../assert/images/xiugai.png'

export const Container = styled.div`
position: relative;
top: 0;
left: 0;
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
box-shadow: 0px 1px 0px 0px #1890FF;
`

export const OperateContainer = styled.div`
width:100%;
margin: 25px 0;
`
export const ShowContainer = styled.div`
width: 96%;
margin-left:2%;
background-color: white;
padding-top:50px;

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
border-radius: 4px;
border: 1px solid #C0C4CC;
background: #FFFFFF;
&p {
    color: red;
}
&.last-page {
    margin-left:40%;
}
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
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(25, 31, 37, 0.75);
    border-bottom: 1px solid rgba(25, 31, 37, 0.08);;

}
td img {
    width:50px;
    height:50px;
}
`
export const Button = styled.div`

width: 140px;
display: inline-block;
margin: 0px 20px;
height: 48px;
line-height: 48px;
text-align:center;
border-radius: 10px;
color: white;
padding-left:10px;

background-repeat:no-repeat;
background-position:20px 13px;
background-size: 22px auto;

&.sold-out-goods {
    background-image: url(${SoleOutIcon});
    background-color: #FF9500;
}
&.arrive-goods {
    background-image: url(${ArriveIcon});
    background-color: #1890FF;

}
&.add-goods {
    background-image: url(${AddIcon});
    background-color: #1CB395;

}
&.change-goods {
    background-image: url(${ChangeIcon});
    background-color: red;
}
`


