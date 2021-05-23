import { fromJS } from "immutable";
import * as constants from './constants'

export default(state = fromJS({pageNum: "1", pageSize:"5", list: [], total: "0",isLastPage:false}), action) => {
    if (action.type === constants.GET_USER_LIST) {
        return state.merge ({
            list: action.data.list,
            pageNum: action.data.pageNum,
            total : action.data.total,
            pageSize: action.data.size,
            isLastPage:action.data.isLastPage
        });
    }
    
    return state;

}