import React, { PureComponent } from 'react';

import 'antd/dist/antd.css';
import {
    Modal, Input,
} from 'antd';
import {connect} from "react-redux";
import {actionCreators} from "../store";

class AddModal extends PureComponent {

    state = {
        user_id: '',
        user_name: '',
        password: '',
        email: '',
        user_phone: '',
        user_address: '',
    };

    handleUserIdInput = (event) => {
        this.setState({
            user_id: event.target.value,
        });
    };

    handleUserNameInput = (event) => {
        this.setState({
            user_name: event.target.value,
        });
    };

    handlePasswordInput = (event) => {
        this.setState({
            password: event.target.value,
        });
    };

    handleEmailInput = (event) => {
        this.setState({
            email: event.target.value,
        });
    };

    handleUserPhoneInput = (event) => {
        this.setState({
            user_phone: event.target.value,
        });
    };

    handleUserAddressInput = (event) => {
        this.setState({
            user_address: event.target.value,
        });
    };

    render() {

        const { visible, changeAddVisible, addItem } = this.props;

        return (
            <div>
                <Modal
                    title="请输入以下信息"
                    visible={visible}
                    onOk={() => addItem(this.state)}
                    onCancel={() => changeAddVisible(false)}
                    maskClosable={false}
                    okText="添加"
                    cancelText="取消"
                    destroyOnClose={true}
                >
                    <p>User ID：</p>
                    <Input
                        onChange={this.handleUserIdInput}
                    />
                    <p>用户名：</p>
                    <Input
                        onChange={this.handleUserNameInput}
                    />
                    <p>密码：</p>
                    <Input
                        onChange={this.handlePasswordInput}
                    />
                    <p>邮箱：</p>
                    <Input
                        onChange={this.handleEmailInput}
                    />
                    <p>电话：</p>
                    <Input
                        onChange={this.handleUserPhoneInput}
                    />
                    <p>地址：</p>
                    <Input
                        onChange={this.handleUserAddressInput}
                    />
                </Modal>
            </div>
        );
    }
}

const mapState = (state) => ({
    visible: state.getIn(['user', 'addVisible']),
});

const mapDispatchToProps = (dispatch) => ({
    changeAddVisible(state){
        dispatch(actionCreators.changeAddVisible(state));
    },
    addItem(addData){
        dispatch(actionCreators.handelAddItem(addData));
        dispatch(actionCreators.changeAddVisible(false));
        dispatch(actionCreators.getTableData());
        dispatch(actionCreators.changeSearch(false));
    }
});

export default connect(mapState, mapDispatchToProps)(AddModal);
