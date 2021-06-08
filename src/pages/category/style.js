import styled from 'styled-components';

export const TopTitle = styled.div`
height: 46px;
font-size: 14px;
font-family: PingFangSC-Medium, PingFang SC;
font-weight: 500;
color: #191F25;
background-color:#FAFAFA;
line-height: 46px;
text-align: center;
`
export const BottomContainer = styled.div`
background-color: #F7F8FA;
width: 100%;
position: absolute;
padding-top: 25px;
`
export const ShowContainer = styled.div`
width: 96%;
left: 2%;
background-color: white;
position: relative;
`

export const LeftLevelDiv = styled.div`
width: 46%;
height: 400px;
border: 1px solid #F0F3F7;
position: relative;
right: 0px;
margin: 20px;
display: inline-block;
`

export const RightLevelDiv = styled.div`
width: 46%;
height: 400px;
right: 0;
top:0;
display: inline-block;
border: 1px solid #F0F3F7;
position: absolute;
top: 20px;
right: 2%;
`
export const Detail = styled.div`
width: 95%;
height: 36px;
font-size: 14px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #191F25;
line-height: 36px;
display: inline-block;
padding-left: 5%;
div: hover {
    background-color: #E7F1FF;
}
div{
    position: relative;
    left: -5%;
    padding-left: 5%;
    width: 100%;
    span {
        float: right;
        margin-right: 20px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #1890FF;
        line-height: 36px;
        &.delete {
            color: #E6352B;
        }
    }
}
`
export const AddButton = styled.div`
width: 100%;
height: 60px;
font-size: 14px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #1890FF;
line-height: 60px;
text-align: left;
padding-left: 5%;
`

export const Input = styled.input`
margin-left: 5%;
height : 20px;
margin-top: 8px;
display: none;

&.show{
    display: block;
}
`