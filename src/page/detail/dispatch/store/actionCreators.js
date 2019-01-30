import * as constains from './constants';
import axios from 'axios';

const changeTableData = (result) => ({
    type: constains.GET_TABLE_DATA,
    columns: result.columns,
    dispatch_data: result.dispatch_data
});

export const getTableData = () => {
    return (dispatch) => {
        axios.get('/api/dispatch.json').then((res) => {
            const result = res.data.data;
            dispatch(changeTableData(result));
        }).catch(() => {
            alert('后台连接失败，请稍后再试！');
        })
    }
};