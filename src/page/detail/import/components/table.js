import React, { PureComponent } from 'react';

import 'antd/dist/antd.css';
import {
    Table,
} from 'antd';

import {actionCreators} from "../store";
import {connect} from "react-redux";

const title = () => '入库信息';
const footer = () => '入库信息';

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
        },{title: '送货单位/人',
            dataIndex: 'company',
            key: 'company',
        },{title: '送货日期',
            dataIndex: 'send_time',
            key: 'send_time',
        },{title: '入库日期',
            dataIndex: 'enter_time',
            key: 'enter_time',
        },{title: '仓库号',
            dataIndex: 'warehouse_id',
            key: 'warehouse_id',
        },{title: '零件号',
            dataIndex: 'part_id',
            key: 'part_id',
        },{title: '数量',
            dataIndex: 'number',
            key: 'number',
        },{title: '检验人',
            dataIndex: 'checkout',
            key: 'checkout',
        },{title: '实收数量',
            dataIndex: 'account',
            key: 'account',
        },{title: '备注',
            dataIndex: 'remark',
            key: 'remark',
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
    data: state.getIn(['import', 'import_data']),
    ifSearch: state.getIn(['import', 'ifSearch']),
    search_data: state.getIn(['import', 'search_data']),
});

const mapDispatchToProps = (dispatch) => ({
    getTableData(){
        dispatch(actionCreators.getTableData());
    }
});

export default connect(mapState, mapDispatchToProps)(InfoTable);