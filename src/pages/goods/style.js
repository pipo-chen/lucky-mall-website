import styled  from 'styled-components'
import ArriveIcon from '../../assert/images/shangjia.png'
import SoleOutIcon from '../../assert/images/xiajia.png'
import AddIcon from '../../assert/images/tianjia.png'
import ChangeIcon from '../../assert/images/xiugai.png'

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

export const OperateContainer = styled.div`
width:96%;
padding-top: 25px;
margin-top: 20px;
background-color: white;
margin-left: 2%;
`

export const Button = styled.div`

width: 120px;
display: inline-block;
margin: 0px 2%;
height: 48px;
line-height: 48px;
text-align:center;
border-radius: 10px;
color: white;
padding-left:10px;

background-repeat:no-repeat;
background-position:10px 13px;
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


