import axios from 'axios'
import * as constants from './constants'

const changeLogin = (value) => ({
    type: constants.CHANGE_LOGIN,
    value: value
})

export const loginApp = (account, password) => {
    return(dispatch) => {
        const f = new FormData()
        f.append('loginUserName',account)
        f.append('loginPassword',password)
        
        console.log(account, password, f);
        axios.post('/admin/login.do',f).then((res)=>{
            if (res.data.status == 0) {
                console.log(res.data.msg);
                const action = changeLogin(true);
                dispatch(action);
            } else {
                alert(res.data.msg)
            }
        });
    }
}