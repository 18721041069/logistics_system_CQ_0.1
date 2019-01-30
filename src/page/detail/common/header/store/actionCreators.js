import * as constains from './constants';
import { fromJS } from "immutable";

export const activeWhichButton = (whichButton) => ({
    type: constains.CHANGE_BUTTON,
    whichButton: fromJS(whichButton)
});