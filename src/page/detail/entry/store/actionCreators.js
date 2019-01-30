import * as constains from './constants';
import { fromJS } from "immutable";
import axios from 'axios';

const changeTable1Data = (result) => ({
    type: constains.GET_TABLE1_DATA,
    columns1: result.columns1,
    entry_data_1: result.entry_data_1
});

const changeTable2Data = (result) => ({
    type: constains.GET_TABLE2_DATA,
    columns2: result.columns2,
    entry_data_2: result.entry_data_2
});

export const showWhichList = (listnumber) => ({
    type: constains.CHANGE_LIST,
    entryList: fromJS(listnumber)
});

export const getTable1Data = () => {
    return (dispatch) => {
        axios.get('/api/entry1.json').then((res) => {
            const result = res.data.data;
            dispatch(changeTable1Data(result));
        }).catch(() => {
            alert('后台连接失败，请稍后再试！');
        })
    }
};

export const getTable2Data = () => {
    return (dispatch) => {
        axios.get('/api/entry2.json').then((res) => {
            const result = res.data.data;
            dispatch(changeTable2Data(result));
        }).catch(() => {
            alert('后台连接失败，请稍后再试！');
        })
    }
};