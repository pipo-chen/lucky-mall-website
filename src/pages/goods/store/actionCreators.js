import axios from 'axios'
import * as constants from './constants'

const changeData = (data) => ({
    type: constants.CHANGE_DATA,
    data: data
})

export const getList = () => {
    return(dispatch) => {
        const f = new FormData()
        f.append('pageNum',"1")
        f.append('pageSize',"5")
        
        axios.post('/goods/list.do',f).then((res)=>{
            if (res.data.status == 0) {
                console.log(res.data.msg);
                const action = changeData(res.data.data.list);
                dispatch(action);
            } else {
                alert(res.data.msg)
            }
        });
        
    }
}