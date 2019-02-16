import { fromJS } from "immutable";
import * as constains from './constants';

const defaultState = fromJS({
    store_data: [],
    ifSearch: false,
    search_data: [],
    deleteVisible: false,
    addVisible: false,
    updateVisible: false,
});

export default (state = defaultState, action) => {
    switch(action.type){
        case constains.GET_TABLE_DATA:
            return state.merge({
                store_data: action.store_data
            });
        case constains.HANDLE_SEARCH:
            return state.merge({
                search_data: action.search_data,
                ifSearch: true
            });
        case constains.CHANGE_SEARCH:
            return state.merge({
                ifSearch: action.state,
            });
        case constains.CHANGE_DELETE_VISIBLE:
            return state.merge({
                deleteVisible: action.state
            });
        case constains.CHANGE_ADD_VISIBLE:
            return state.merge({
                addVisible: action.state
            });
        case constains.CHANGE_UPDATE_VISIBLE:
            return state.merge({
                updateVisible: action.state
            });
        default:
            return state;
    }
}