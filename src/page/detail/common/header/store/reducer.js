import { fromJS } from "immutable";
import * as constains from './constants';

const defaultState = fromJS({
    whichButton: 'home'
});

export default (state = defaultState, action) => {
    switch(action.type){
        case constains.CHANGE_BUTTON:
            return state.set('whichButton', action.whichButton);
        default:
            return state;
    }
}