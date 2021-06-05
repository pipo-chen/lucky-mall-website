import { fromJS } from "immutable";
import * as constants from './constants'

export default(state = fromJS({ list: [], second:[], parentId: "107"}), action) => {
   
    if (action.type == constants.BASIC_CATEGORY_LIST ) {
        return state.set("list",action.list);
    }
    if (action.type == constants.SECOND_CATEGPRY_LIST) {
        return state.merge({
            "second": action.list,
            "secondId" : action.parentId
        })
    
    }
    return state;

}