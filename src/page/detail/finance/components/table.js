import React, { PureComponent } from 'react';

import 'antd/dist/antd.css';
import {
    Table,
} from 'antd';

import {actionCreators} from "../store";
import {connect} from "react-redux";

const title = () => '财务收支信息';
const footer = () => '财务收支信息';

class InfoTable extends PureComponent {

    componentWillMount() {
        this.props.getTableData();
    }

    state = {
        searchText: '',
        title: title,
        footer: footer,
    };

    render() {

        const columns = [{
            title: 'Object ID',
            dataIndex: 'object_id',
            key: 'object_id',
        },{
            title: '日期',
            dataIndex: 'date',
            key: 'date',
        },{
            title: '收/支项目名称',
            dataIndex: 'title',
            key: 'title',
        },{
            title: '金额',
            dataIndex: 'amount',
            key: 'amount',
        },{title: '收入',
            dataIndex: 'income',
            key: 'income',
        },{title: '支出',
            dataIndex: 'expend',
            key: 'expend',
        },{title: '账上剩余金额',
            dataIndex: 'balance',
            key: 'balance',
        },{title: '备注',
            dataIndex: 'remark',
            key: 'remark',
        },{title: '操作',
            dataIndex: 'action',
            key: 'action',
        },{title: '管理员',
            dataIndex: 'administrator_id',
            key: 'administrator_id',
        },{title: '创建时间',
            dataIndex: 'create_time',
            key: 'create_time',
        }];

        const { data, ifSearch, search_data } = this.props;
        if(!ifSearch){
            return (
                <div>
                    <Table
                        {...this.state}
                        columns={ columns }
                        dataSource={ data }
                    />
                </div>
            )
        }else {
            return (
                <div>
                    <Table
                        {...this.state}
                        columns={ columns }
                        dataSource={ search_data }
                    />
                </div>
            )}
    }
}

const mapState = (state) => ({
    data: state.getIn(['finance', 'finance_data']),
    ifSearch: state.getIn(['finance', 'ifSearch']),
    search_data: state.getIn(['finance', 'search_data']),
});

const mapDispatchToProps = (dispatch) => ({
    getTableData(){
        dispatch(actionCreators.getTableData());
    }
});

export default connect(mapState, mapDispatchToProps)(InfoTable);
