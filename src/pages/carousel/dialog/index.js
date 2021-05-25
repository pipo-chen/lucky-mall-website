import { Select } from 'antd';
import React, {PureComponent} from 'react';
import {connect} from 'react-redux'
import {
    Back,
    SelectButton
} from './style'
import {
    Table,

} from '../../goods/goodsAdd/style'
import { updateItem, updateCarouselInfo} from '../store/actionCreators'

class Dialog extends PureComponent {
    render() {
        const {select, handleClose, handleSubmit} = this.props;
        return(
            <Back>
               <Table>
                   <tbody>
                   <tr>
                       <td>轮播图片</td>
                       <td><input ref={(input) => {this.carouselUrl = input}} type="text" defaultValue={select.carouselUrl}/></td>
                   </tr>
                   <tr>
                       <td>访问地址</td>
                       <td><input ref={(input) => {this.redirectUrl = input}}  type="text" defaultValue={select.redirectUrl}/></td>
                   </tr>
                   <tr>
                       <td>等级</td>
                       <td>
                           <select ref={(select) => {this.carouselRank = select}} defaultValue={select.carouselRank}>
                               <option>0</option>
                               <option>1</option>
                               <option>2</option>
                               <option>3</option>
                           </select>
                       </td>
                   </tr>
                   <tr>
                       <td><SelectButton onClick={()=>{handleClose(select)}}>关闭</SelectButton></td>
                       <td><SelectButton onClick={()=>{handleSubmit(select.carouselId, this.carouselUrl, this.redirectUrl, this.carouselRank)}}>提交</SelectButton></td>
                   </tr>
                   </tbody>
               </Table>
            </Back>
        )
    }
}

const mapState = (state) => ({
   select: state.carousel.get("select")
});

const mapDispatch = (dispatch) => ({
    handleClose(item) {
        const action = updateItem(item,false);
        dispatch(action);
    },
    handleSubmit(carouselId, carouselUrl, redirectUrl, carouselRank) {
        const action = updateCarouselInfo(carouselId, carouselUrl.value, redirectUrl.value, carouselRank.value);
        dispatch(action);
    }
})

export default connect(mapState, mapDispatch)(Dialog);