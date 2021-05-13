import { fromJS } from "immutable";
import * as constants from './constants'

export default(state = fromJS({login: true}), action) => {
    return state;

}