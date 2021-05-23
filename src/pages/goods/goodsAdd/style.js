import styled  from 'styled-components'


export const ShowContainer = styled.div`
margin-top:2%;
width: 96%;
margin-left:2%;
background-color: white;
margin-top:2%;
`
export const TopContainer = styled.div`
width:100%;
height: 56px;
border:1px solid #F0F3F7;
button {
    width: 74px;
    height: 32px;
    background: #FFFFFF;
    border-radius: 4px;
    border: 1px solid #D8D8DD;
    margin-left: 24px;
}
p {
    text-align: center;
    width:90%;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #191F25;
    display:inline-block;
}
`

export const Table = styled.table`
margin-top: 46px;
width:70%;
margin-right:15%;
text-align:left;
font-size: 14px;
font-family: PingFangSC-Regular, PingFang SC;
font-weight: 400;
color: #191F25;
tr {
    height:60px;
}
.title {
    text-align:right;
    padding-right:20px;
    width: 50%;
}
td {
    width:50%;
}
input {
    width:100%;
    background: #FFFFFF;
    border-radius: 4px;
    border: 1px solid #D8D8DD;
    height:32px;
}
select {
    width:100%;
    background: #FFFFFF;
    border-radius: 4px;
    border: 1px solid #D8D8DD;
    height:32px;
}
textarea {
    width:100%;
    background: #FFFFFF;
    border-radius: 4px;
    border: 1px solid #D8D8DD;
    height:64px;
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


