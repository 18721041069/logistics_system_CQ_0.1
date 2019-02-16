import React, { PureComponent } from 'react';

import 'antd/dist/antd.css';
import {
    Modal, Input,
} from 'antd';
import {connect} from "react-redux";
import {actionCreators} from "../store";
import moment from 'moment';

class AddModal extends PureComponent {

    state = {
        order_id: '',
        create_time: '',
        user_id: '',
        part_id: '',
        quantity: '',
        checkout: '',
        remark: '',
        administrator_id: '',
    };

    handleOrderIdInput = (event) => {
        this.setState({
            order_id: event.target.value,
        });
    };

    handleUserIdInput = (event) => {
        this.setState({
            user_id: event.target.value,
        });
    };

    handlePartIdInput = (event) => {
        this.setState({
            part_id: event.target.value,
        });
    };

    handleQuantityInput = (event) => {
        this.setState({
            quantity: event.target.value,
        });
    };

    handleCheckoutInput = (event) => {
        this.setState({
            checkout: event.target.value,
        });
    };

    handleRemarkInput = (event) => {
        this.setState({
            remark: event.target.value,
        });
    };

    render() {

        const { visible, changeAddVisible, addItem, administrator_id } = this.props;

        return (
            <div>
                <Modal
                    title="请输入以下信息"
                    visible={visible}
                    onOk={() => addItem(this.state, administrator_id)}
                    onCancel={() => changeAddVisible(false)}
                    maskClosable={false}
                    okText="添加"
                    cancelText="取消"
                    destroyOnClose={true}
                >
                    <p>订单号：</p>
                    <Input
                        onChange={this.handleOrderIdInput}
                    />
                    <p>用户：</p>
                    <Input
                        onChange={this.handleUserIdInput}
                    />
                    <p>零件号：</p>
                    <Input
                        onChange={this.handlePartIdInput}
                    />
                    <p>数量：</p>
                    <Input
                        onChange={this.handleQuantityInput}
                    />
                    <p>检验人：</p>
                    <Input
                        onChange={this.handleCheckoutInput}
                    />
                    <p>备注：</p>
                    <Input
                        onChange={this.handleRemarkInput}
                    />
                </Modal>
            </div>
        );
    }
}

const mapState = (state) => ({
    visible: state.getIn(['order', 'addVisible']),
    administrator_id: state.getIn(['login', 'administrator_id']),
});

const mapDispatchToProps = (dispatch) => ({
    changeAddVisible(state){
        dispatch(actionCreators.changeAddVisible(state));
    },
    addItem(addData, administrator_id){
        addData.create_time=moment().format('YYYY-MM-DD HH:mm:ss');
        addData.administrator_id=administrator_id;
        dispatch(actionCreators.handelAddItem(addData));
        dispatch(actionCreators.changeAddVisible(false));
        dispatch(actionCreators.getTableData());
        dispatch(actionCreators.changeSearch(false));
    }
});

export default connect(mapState, mapDispatchToProps)(AddModal);
