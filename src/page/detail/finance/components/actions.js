import React, { PureComponent } from 'react';

import 'antd/dist/antd.css';
import {
    Button, Select, Row, Col, Input
} from 'antd';
import {connect} from "react-redux";
import {actionCreators} from "../store";
import AddModal from "./addModal";
import UpdateModal from "./updateModal";
import DeleteModal from "./deleteModal";
import {Link} from "react-router-dom";


const Option = Select.Option;
const Actions = Input.Search;

class TableActions extends PureComponent {

    state = {
        searchByWhat: '',
        searchText: '',
    };

    handleSelectChange = (value) => {
        this.setState({ searchByWhat: value });
    };

    render() {

        const { handleSearch, changeSearch, isAdministrator, changeDeleteVisible, changeAddVisible, changeUpdateVisible } = this.props;

        return (
            <div>
                <Row gutter={16}>
                    <Col className="gutter-row" span={6}>
                        <Select
                            defaultValue="选择搜索方式"
                            style={{ width: '100%' }}
                            onChange={this.handleSelectChange}
                        >
                            <Option value="id">按 Object ID 搜索</Option>
                            <Option value="time" >按 日期 搜索</Option>
                            <Option value="title">按 收/支项目名称 搜索</Option>
                            <Option value="action">按 操作 搜索</Option>
                            <Option value="amount">按 金额 搜索</Option>
                        </Select>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Actions
                            placeholder="输入关键字进行搜索 日期格式需为：YYYY-MM-DD"
                            onSearch={(value) => handleSearch(this.state.searchByWhat, value)}
                            enterButton
                        />
                    </Col>
                    <Col className="gutter-row" span={3}>
                        <Link to='/finance'><Button
                            type="primary"
                            onClick={() => changeSearch(false)}
                        >取消</Button></Link>
                    </Col>
                    {
                        isAdministrator ?
                            <span>
                                <Col className="gutter-row" span={2}>
                                    <Button
                                        type="primary"
                                        ghost
                                        onClick={() => changeAddVisible(true)}
                                    >增加</Button>
                                </Col>
                                <AddModal />
                                <Col className="gutter-row" span={2}>
                                    <Button
                                        type="primary"
                                        ghost
                                        onClick={() => changeUpdateVisible(true)}
                                    >修改</Button>
                                </Col>
                                <UpdateModal />
                                <Col className="gutter-row" span={2}>
                                    <Button
                                        type="primary"
                                        ghost
                                        onClick={() => changeDeleteVisible(true)}
                                    >删除</Button>
                                </Col>
                                <DeleteModal />
                            </span> : ''
                    }
                </Row>
            </div>
        )
    }
}

const mapState = (state) => ({
    data: state.getIn(['finance', 'finance_data']),
    isAdministrator: state.getIn(['login', 'isAdministrator']),
});

const mapDispatchToProps = (dispatch) => ({
    handleSearch(searchByWhat, searchText){
        dispatch(actionCreators.handleSearch(searchByWhat, searchText));
    },
    changeSearch(state){
        dispatch(actionCreators.changeSearch(state));
    },
    changeDeleteVisible(state){
        dispatch(actionCreators.changeDeleteVisible(state));
    },
    changeAddVisible(state){
        dispatch(actionCreators.changeAddVisible(state));
    },
    changeUpdateVisible(state){
        dispatch(actionCreators.changeUpdateVisible(state));
    },
});

export default connect(mapState, mapDispatchToProps)(TableActions);
