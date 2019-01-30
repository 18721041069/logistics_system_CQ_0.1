import { fromJS } from "immutable";
import * as constains from './constants';

const defaultState = fromJS({
    saleList: 1,
    columns: [],
    sale_orders: [],
});

export default (state = defaultState, action) => {
    switch(action.type){
        case constains.CHANGE_LIST:
            return state.set('saleList', action.saleList);
        case constains.GET_TABLE_DATA:
            return state.merge({
                columns: action.columns,
                sale_orders: action.sale_orders
            });
        default:
            return state;
    }
}