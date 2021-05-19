import axios from 'axios'
import * as constants from './constants'

const registerSuccess = (value) => ({
    type: constants.REGISTER,
    value: value
})

export const registerApp = (account, password, nickname) => {
    return(dispatch) => {
        const formdata = new FormData()
        formdata.append('loginUserName',account)
        formdata.append('loginPassword',password)
        formdata.append('nickName', nickname);
        axios.post('/admin/register.do',formdata).then((res)=>{
            alert(res.data.msg);
            if (res.data.status == 0) {
                const action = registerSuccess(true)
                dispatch(action)
            } 
        });
    }
}
