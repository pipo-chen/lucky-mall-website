import { fromJS } from "immutable";
import * as constants from './constants'

export default(state = fromJS({ list: [], second:[], parentId: "107", addParent: false, addChild: false}), action) => {
   
    if (action.type == constants.BASIC_CATEGORY_LIST ) {
        return state.merge({
            "list" : action.list,
            "addParent" : false,
            "addChild" : false
        })
    }
    if (action.type == constants.SECOND_CATEGPRY_LIST) {
        return state.merge({
            "second": action.list,
            "parentId" : action.parentId,
            "addParent" : false,
            "addChild" : false
        })
    
    }
    if (action.type == constants.ADD_PARENT_CATEGORY) {
        return state.set("addParent" , action.isAdd);
    }
    if (action.type == constants.ADD_CHILD_CATEGORY) {
        return state.set("addChild", action.isAdd);
    }
    return state;

}