import React, { PureComponent } from 'react';

import 'antd/dist/antd.css';
import {
    Modal, Input,
} from 'antd';
import {connect} from "react-redux";
import {actionCreators} from "../store";

class UpdateModal extends PureComponent {

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

    handleCreateTimeInput = (event) => {
        this.setState({
            create_time: event.target.value,
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
                    <p>订单号：</p>
                    <Input
                        onChange={this.handleOrderIdInput}
                    />
                    <p>生成时间：</p>
                    <Input
                        placeholder="格式：YYYY-MM-DD HH:mm:ss"
                        onChange={this.handleCreateTimeInput}
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
    visible: state.getIn(['order', 'updateVisible']),
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
