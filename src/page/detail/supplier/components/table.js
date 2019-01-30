import React, { PureComponent } from 'react';

import 'antd/dist/antd.css';
import {
    Table, Input, Button, Icon,
} from 'antd';
import Highlighter from 'react-highlight-words';

import {actionCreators} from "../store";
import {connect} from "react-redux";

import AddDrawer from './addModal';

const title = () => '供应商管理信息';
const footer = () => '供应商管理信息';

class InfoTable extends PureComponent {

    componentWillMount() {
        this.props.getTableData();
    }

    state = {
        searchText: '',
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
        title: title,
        footer: footer,
    };

    start = () => {
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
        console.log("删除供应商序号：" + this.state.selectedRowKeys);
    };

    onSelectChange = (selectedRowKeys) => {
        //console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };

    getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
                             setSelectedKeys, selectedKeys, confirm, clearFilters,
                         }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => { this.searchInput = node; }}
                    placeholder={`搜索 ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm)}
                    icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    搜索
                </Button>
                <Button
                    onClick={() => this.handleReset(clearFilters)}
                    size="small"
                    style={{ width: 90 }}
                >
                    取消
                </Button>
            </div>
        ),
        filterIcon: filtered => <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: (text) => (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[this.state.searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ),
    });

    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    };

    handleReset = (clearFilters) => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    render() {
        const { loading, selectedRowKeys } = this.state;
        const { showModal } = this.props;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;

        let tableColumns = [];
        for (let i = 0, length = this.props.columns.length; i < length; i++) {
            let item = this.props.columns[i];
            tableColumns.push({
                title: item.name,
                dataIndex: item.name,
                key: item.name,
                ...this.getColumnSearchProps(item.name)
            })
        }

        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Button
                        type="primary"
                        onClick={showModal}
                        style={{ marginRight: 30 }}
                    >
                        <Icon type="plus" />添加
                    </Button>
                    <AddDrawer />
                    <Button
                        type="primary"
                        onClick={this.start}
                        disabled={!hasSelected}
                        loading={loading}
                    >
                        删除
                    </Button>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                </div>
                <Table
                    {...this.state}
                    rowSelection={rowSelection}
                    columns={tableColumns}
                    dataSource={this.props.data}
                />
            </div>
        )
    }
}

const mapState = (state) => ({
    columns: state.getIn(['supplier', 'columns']),
    data: state.getIn(['supplier', 'suppliers']),
});

const mapDispatchToProps = (dispatch) => ({
    getTableData(){
        dispatch(actionCreators.getTableData());
    },
    showModal(){
        dispatch(actionCreators.changeModalVisible(true));
    }
});

export default connect(mapState, mapDispatchToProps)(InfoTable);
