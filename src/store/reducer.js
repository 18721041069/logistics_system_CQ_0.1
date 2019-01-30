import { combineReducers} from "redux-immutable";
import { reducer as loginReducer } from '../page/login/store';
import { reducer as headerReducer } from '../page/detail/common/header/store';
import { reducer as entryReducer } from '../page/detail/entry/store';
import { reducer as deliveryReducer } from '../page/detail/delivery/store';
import { reducer as dispatchReducer } from '../page/detail/dispatch/store';
import { reducer as saleReducer } from '../page/detail/sale/store';
import { reducer as supplierReducer } from '../page/detail/supplier/store';

const reducer = combineReducers({
    login: loginReducer,
    header: headerReducer,
    entry: entryReducer,
    delivery: deliveryReducer,
    dispatch: dispatchReducer,
    sale: saleReducer,
    supplier: supplierReducer
});

export default reducer;