import * as constains from './constants';
import axios from 'axios';

const changeTableData = (data) => ({
    type: constains.GET_TABLE_DATA,
    store_data: data
});

const changeSearchData = (data) => ({
    type: constains.HANDLE_SEARCH,
    search_data: data
});

export const getTableData = () => {
    return (dispatch) => {
        axios.get('http://localhost:8012/store').then((res) => {
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
            axios.get('http://localhost:8012/store/by_'+ searchByWhat + '/' + searchText).then((res) => {
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
        axios.get('http://localhost:8012/store/delete/'+ deleteID).then((res) => {
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
        //console.log('添加内容：', addData);
        axios.post('http://localhost:8012/store/add', {
            part_id: Number(addData.part_id),
            part_name: addData.part_name,
            standard: addData.standard,
            unit: addData.unit,
            number: Number(addData.number),
            warehouse_id: Number(addData.warehouse_id),
            remark: addData.remark,
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
        //console.log('更新内容：', updateData);
        axios.post('http://localhost:8012/store/update', {
            part_id: Number(updateData.part_id),
            part_name: updateData.part_name,
            standard: updateData.standard,
            unit: updateData.unit,
            number: Number(updateData.number),
            warehouse_id: Number(updateData.warehouse_id),
            remark: updateData.remark,
            administrator_id:  Number(updateData.administrator_id),
        }).then((res) => {
            //有待改进
        }).catch(() => {
            alert('后台连接失败，请稍后再试！');
        })
    }
};