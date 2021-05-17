import { fromJS } from "immutable";
import * as constants from './constants'

export default(state = fromJS({list: [],select: [], isSelectAll: false, pageNum: "1", pageSize: "5", "total": "10","isLastPage":"false"}), action) => {
    if (action.type === constants.CHANGE_DATA) {
        //初始化 false
        const newSelect = [...action.data.list];
        for (const map of newSelect) {
            map["isSelect"]= false;
        }

        return state.merge ({
            list: action.data.list,
            select: [...newSelect],
            pageNum: action.data.pageNum,
            total : action.data.total,
            pageSize: action.data.size,
            isLastPage:action.data.isLastPage
        });
    }
    if (action.type === constants.SELECT_ALL) {
        const newSelect = [...state.get("select")];
        if (!action.isSelectAll) {
            for (const map of newSelect) {
                map["isSelect"]= false;
            }
        } else {
            for (const map of newSelect) {
                map["isSelect"]= true;
            }
        }
        return state.merge ({
            isSelectAll: action.isSelectAll,
            select: [...newSelect]
        })
    }

    if (action.type === constants.SELECT_GOODSID) {
        
        const newSelect = [...state.get("select")];
        for (const map of newSelect) {
            if (map.goodsId == action.goodsId) {
                map["isSelect"]  = !map["isSelect"];
                
            }
        }
        return state.set("select", [...newSelect]);
    }
    return state;
}
