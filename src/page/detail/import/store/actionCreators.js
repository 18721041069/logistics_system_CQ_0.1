import * as constains from './constants';
import axios from 'axios';

const changeTableData = (data) => ({
    type: constains.GET_TABLE_DATA,
    import_data: data
});

const changeSearchData = (data) => ({
    type: constains.HANDLE_SEARCH,
    search_data: data
});

export const getTableData = () => {
    return (dispatch) => {
        axios.get('http://localhost:8012/import').then((res) => {
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
            axios.get('http://localhost:8012/import/by_'+ searchByWhat + '/' + searchText).then((res) => {
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
        axios.get('http://localhost:8012/import/delete/'+ deleteID).then((res) => {
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
        axios.post('http://localhost:8012/import/add', {
            object_id: Number(addData.object_id),
            company: addData.company,
            send_time: addData.send_time,
            enter_time: addData.enter_time,
            warehouse_id: Number(addData.warehouse_id),
            part_id: Number(addData.part_id),
            number: Number(addData.number),
            checkout: addData.checkout,
            account: Number(addData.account),
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
        axios.post('http://localhost:8012/import/update', {
            object_id: Number(updateData.object_id),
            company: updateData.company,
            send_time: updateData.send_time,
            enter_time: updateData.enter_time,
            warehouse_id: Number(updateData.warehouse_id),
            part_id: Number(updateData.part_id),
            number: Number(updateData.number),
            checkout: updateData.checkout,
            account: Number(updateData.account),
            remark: updateData.remark,
            administrator_id:  Number(updateData.administrator_id),
        }).then((res) => {
            //有待改进
        }).catch(() => {
            alert('后台连接失败，请稍后再试！');
        })
    }
};