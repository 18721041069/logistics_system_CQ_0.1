import { fromJS } from "immutable";
import * as constains from './constants';

const defaultState = fromJS({
    columns: [],
    dispatch_data: [],
});

export default (state = defaultState, action) => {
    switch(action.type){
        case constains.GET_TABLE_DATA:
            return state.merge({
                columns: action.columns,
                dispatch_data: action.dispatch_data
            });
        default:
            return state;
    }
}