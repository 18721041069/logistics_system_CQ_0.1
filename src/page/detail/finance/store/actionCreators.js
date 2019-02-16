import * as constains from './constants';
import axios from 'axios';

const changeTableData = (data) => ({
    type: constains.GET_TABLE_DATA,
    finance_data: data
});

const changeSearchData = (data) => ({
    type: constains.HANDLE_SEARCH,
    search_data: data
});

export const getTableData = () => {
    return (dispatch) => {
        axios.get('http://localhost:8012/finance').then((res) => {
            dispatch(changeTableData(res.data));
        }).catch(() => {
            alert('后台连接失败，请稍后再试！');
        })
    }
};

export const handleSearch = (searchByWhat, searchText) => {
    return (dispatch) => {
        if(searchByWhat === ''){
            alert('请选择搜索方式！');
        }else{
            // console.log('搜索方式：' , searchByWhat);
            // console.log('搜索内容：' , searchText);
            axios.get('http://localhost:8012/finance/by_'+ searchByWhat + '/' + searchText).then((res) => {
                dispatch(changeSearchData(res.data));
            }).catch(() => {
                alert('后台连接失败，请稍后再试！');
            })
        }
    }
};

export const changeSearch = (state) => ({
    type: constains.CHANGE_SEARCH,
    state: state
});

export const changeDeleteVisible = (state) => ({
    type: constains.CHANGE_DELETE_VISIBLE,
    state: state
});

export const handelDeleteItem = (deleteID) => {
    return () => {
        //console.log('删除ID：', deleteID);
        axios.get('http://localhost:8012/finance/delete/'+ deleteID).then((res) => {
            //有待改进
        }).catch(() => {
            alert('后台连接失败，请稍后再试！');
        })
    }
};

export const changeAddVisible = (state) => ({
    type: constains.CHANGE_ADD_VISIBLE,
    state: state
});

export const handelAddItem = (addData) => {
    return () => {
        console.log('添加内容：', addData);
        axios.post('http://localhost:8012/finance/add', {
            object_id: Number(addData.object_id),
            date: addData.date,
            title: addData.title,
            amount: addData.amount,
            income: addData.income,
            expend: addData.expend,
            balance: addData.balance,
            remark: addData.remark,
            action: addData.action,
            administrator_id:  Number(addData.administrator_id),
        }).then((res) => {
            //有待改进
        }).catch(() => {
            alert('后台连接失败，请稍后再试！');
        })
    }
};

export const changeUpdateVisible = (state) => ({
    type: constains.CHANGE_UPDATE_VISIBLE,
    state: state
});

export const handelUpdateItem = (updateData) => {
    return () => {
        console.log('更新内容：', updateData);
        axios.post('http://localhost:8012/finance/update', {
            object_id: Number(updateData.object_id),
            date: updateData.date,
            title: updateData.title,
            amount: updateData.amount,
            income: updateData.income,
            expend: updateData.expend,
            balance: updateData.balance,
            remark: updateData.remark,
            action: updateData.action,
            administrator_id:  Number(updateData.administrator_id),
        }).then((res) => {
            //有待改进
        }).catch(() => {
            alert('后台连接失败，请稍后再试！');
        })
    }
};
