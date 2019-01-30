import React, { PureComponent } from 'react';

import 'antd/dist/antd.css';
import {
    Table, Input, Button, Icon,
} from 'antd';
import Highlighter from 'react-highlight-words';

import {actionCreators} from "../store";
import {connect} from "react-redux";

const title = () => '出库单信息';
const footer = () => '出库单一式三联，第一联：送货人联；第二联：财务联；第三联：仓库存查。';

class InfoTable extends PureComponent {

    componentWillMount() {
        this.props.getTableData();
    }

    state = {
        searchText: '',
        title: title,
        footer: footer,
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
                <Table
                    {...this.state}
                    columns={tableColumns}
                    dataSource={this.props.data}
                />
            </div>
        )
    }
}

const mapState = (state) => ({
    columns: state.getIn(['delivery', 'columns']),
    data: state.getIn(['delivery', 'delivery_data']),
});

const mapDispatchToProps = (dispatch) => ({
    getTableData(){
        dispatch(actionCreators.getTableData());
    }
});

export default connect(mapState, mapDispatchToProps)(InfoTable);
