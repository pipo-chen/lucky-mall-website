import styled  from 'styled-components'

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