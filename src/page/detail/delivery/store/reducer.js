import { fromJS } from "immutable";
import * as constains from './constants';

const defaultState = fromJS({
    columns: [],
    delivery_data: [],
});

export default (state = defaultState, action) => {
    switch(action.type){
        case constains.GET_TABLE_DATA:
            return state.merge({
                columns: action.columns,
                delivery_data: action.delivery_data
            });
        default:
            return state;
    }
}