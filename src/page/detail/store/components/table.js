import React, { PureComponent } from 'react';

import 'antd/dist/antd.css';
import {
    Table,
} from 'antd';

import {actionCreators} from "../store";
import {connect} from "react-redux";

const title = () => '仓储信息';
const footer = () => '仓储信息';

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
            title: '零件号',
            dataIndex: 'part_id',
            key: 'part_id',
        },{
            title: '零件名',
            dataIndex: 'part_name',
            key: 'part_name',
        },{
            title: '规格',
            dataIndex: 'standard',
            key: 'standard',
        },{
            title: '单位',
            dataIndex: 'unit',
            key: 'unit',
        },{title: '数量',
            dataIndex: 'number',
            key: 'number',
        },{title: '仓库号',
            dataIndex: 'warehouse_id',
            key: 'warehouse_id',
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
    data: state.getIn(['store', 'store_data']),
    ifSearch: state.getIn(['store', 'ifSearch']),
    search_data: state.getIn(['store', 'search_data']),
});

const mapDispatchToProps = (dispatch) => ({
    getTableData(){
        dispatch(actionCreators.getTableData());
    }
});

export default connect(mapState, mapDispatchToProps)(InfoTable);
