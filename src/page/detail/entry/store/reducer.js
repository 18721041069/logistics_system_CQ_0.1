import { fromJS } from "immutable";
import * as constains from './constants';

const defaultState = fromJS({
    entryList: 1,
    columns1: [],
    entry_data_1: [],
    columns2: [],
    entry_data_2: [],
});

export default (state = defaultState, action) => {
    switch(action.type){
        case constains.CHANGE_LIST:
            return state.set('entryList', action.entryList);
        case constains.GET_TABLE1_DATA:
            return state.merge({
                columns1: action.columns1,
                entry_data_1: action.entry_data_1
            });
        case constains.GET_TABLE2_DATA:
            return state.merge({
                columns2: action.columns2,
                entry_data_2: action.entry_data_2
            });
        default:
            return state;
    }
}