import { fromJS } from "immutable";
import * as constains from './constants';

const defaultState = fromJS({
    columns: [],
    suppliers: [],
    addModalVisible: false,
});

export default (state = defaultState, action) => {
    switch(action.type){
        case constains.GET_TABLE_DATA:
            return state.merge({
                columns: action.columns,
                suppliers: action.suppliers
            });
        case constains.CHANGE_MODAL_VISIBLE:
            return state.set("addModalVisible", action.addModalVisible);
        default:
            return state;
    }
}