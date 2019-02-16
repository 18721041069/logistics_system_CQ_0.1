import React, { PureComponent } from 'react';

import 'antd/dist/antd.css';
import {
    Modal, Input,
} from 'antd';
import {connect} from "react-redux";
import {actionCreators} from "../store";

class UpdateModal extends PureComponent {

    state = {
        object_id: '',
        date: '',
        title: '',
        amount: '',
        income: '',
        expend: '',
        balance: '',
        remark: '',
        action: '',
        administrator_id: '',
    };

    handleObjectIdInput = (event) => {
        this.setState({
            object_id: event.target.value,
        });
    };

    handleDateInput = (event) => {
        this.setState({
            date: event.target.value,
        });
    };

    handleTitleInput = (event) => {
        this.setState({
            title: event.target.value,
        });
    };

    handleAmountInput = (event) => {
        this.setState({
            amount: event.target.value,
        });
    };

    handleIncomeInput = (event) => {
        this.setState({
            income: event.target.value,
        });
    };

    handleExpendInput = (event) => {
        this.setState({
            expend: event.target.value,
        });
    };

    handleBalanceInput = (event) => {
        this.setState({
            balance: event.target.value,
        });
    };

    handleActionInput = (event) => {
        this.setState({
            action: event.target.value,
        });
    };

    handleRemarkInput = (event) => {
        this.setState({
            remark: event.target.value,
        });
    };

    render() {

        const { visible, changeUpdateVisible, updateItem, administrator_id } = this.props;

        return (
            <div>
                <Modal
                    title="请输入以下信息"
                    visible={visible}
                    onOk={() => updateItem(this.state, administrator_id)}
                    onCancel={() => changeUpdateVisible(false)}
                    maskClosable={false}
                    okText="更新"
                    cancelText="取消"
                    destroyOnClose={true}
                >
                    <p>Object ID：</p>
                    <Input
                        onChange={this.handleObjectIdInput}
                    />
                    <p>日期：</p>
                    <Input
                        placeholder="格式：YYYY-MM-DD HH:mm:ss"
                        onChange={this.handleDateInput}
                    />
                    <p>收/支项目名称：</p>
                    <Input
                        onChange={this.handleTitleInput}
                    />
                    <p>金额：</p>
                    <Input
                        onChange={this.handleAmountInput}
                    />
                    <p>收入：</p>
                    <Input
                        onChange={this.handleIncomeInput}
                    />
                    <p>支出：</p>
                    <Input
                        onChange={this.handleExpendInput}
                    />
                    <p>账上剩余金额：</p>
                    <Input
                        onChange={this.handleBalanceInput}
                    />
                    <p>备注：</p>
                    <Input
                        onChange={this.handleRemarkInput}
                    />
                    <p>操作：</p>
                    <Input
                        onChange={this.handleActionInput}
                    />
                </Modal>
            </div>
        );
    }
}

const mapState = (state) => ({
    visible: state.getIn(['finance', 'updateVisible']),
    administrator_id: state.getIn(['login', 'administrator_id']),
});

const mapDispatchToProps = (dispatch) => ({
    changeUpdateVisible(state){
        dispatch(actionCreators.changeUpdateVisible(state));
    },
    updateItem(updateData, administrator_id){
        updateData.administrator_id=administrator_id;
        dispatch(actionCreators.handelUpdateItem(updateData));
        dispatch(actionCreators.changeUpdateVisible(false));
        dispatch(actionCreators.getTableData());
        dispatch(actionCreators.changeSearch(false));
    }
});

export default connect(mapState, mapDispatchToProps)(UpdateModal);
