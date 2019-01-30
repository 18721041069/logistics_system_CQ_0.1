import * as constains from './constants';
import { fromJS } from "immutable";
import axios from "axios";

const changeTableData = (result) => ({
    type: constains.GET_TABLE_DATA,
    columns: result.columns,
    sale_orders: result.sale_orders
});

export const showWhichList = (listnumber) => ({
    type: constains.CHANGE_LIST,
    saleList: fromJS(listnumber)
});

export const getTableData = () => {
    return (dispatch) => {
        axios.get('/api/sale.json').then((res) => {
            const result = res.data.data;
            dispatch(changeTableData(result));
        }).catch(() => {
            alert('后台连接失败，请稍后再试！');
        })
    }
};