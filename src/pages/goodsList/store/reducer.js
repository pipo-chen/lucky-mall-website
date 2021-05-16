import { fromJS } from "immutable";
import * as constants from './constants'

export default(state = fromJS({list: [],pageNum: "1", pageSize: "5", "total": "10","isLastPage":"false"}), action) => {
    if (action.type === constants.CHANGE_DATA) {
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
