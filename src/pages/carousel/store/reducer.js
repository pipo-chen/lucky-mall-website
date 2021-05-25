import { fromJS } from "immutable";
import * as constants from './constants'

export default(state = fromJS({select:{}, list: [], update: false, pageNum:"1", pageSize : "5", isLastPage : false, total: 0}), action) => {

    if (action.type === constants.SELECT_LIST) {
        console.log("-->",action.data.list);
        return state.merge ({
            list: action.data.list,
            pageNum: action.data.pageNum,
            total : action.data.total,
            pageSize: action.data.size,
            isLastPage:action.data.isLastPage,
            update: false
        });
    }
    if (action.type === constants.UPDATE_ITEM) {
        return state.merge({
            update: action.isUpdate,
            select: action.item
        })
    }
    return state;
}
