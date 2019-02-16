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
        company: '',
        send_time: '',
        enter_time: '',
        warehouse_id: '',
        part_id: '',
        number: '',
        checkout: '',
        account: '',
        remark: '',
        administrator_id: '',
    };

    handleObjectIdInput = (event) => {
        this.setState({
            object_id: event.target.value,
        });
    };

    handleCompanyInput = (event) => {
        this.setState({
            company: event.target.value,
        });
    };

    handleSendTimeInput = (event) => {
        this.setState({
            send_time: event.target.value,
        });
    };

    handleEnterTimeInput = (event) => {
        this.setState({
            enter_time: event.target.value,
        });
    };

    handleWarehouseIdInput = (event) => {
        this.setState({
            warehouse_id: event.target.value,
        });
    };

    handlePartIdInput = (event) => {
        this.setState({
            part_id: event.target.value,
        });
    };

    handleNumberInput = (event) => {
        this.setState({
            number: event.target.value,
        });
    };

    handleCheckoutInput = (event) => {
        this.setState({
            checkout: event.target.value,
        });
    };

    handleAccountInput = (event) => {
        this.setState({
            account: event.target.value,
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
                    <p>送货单位/人：</p>
                    <Input
                        onChange={this.handleCompanyInput}
                    />
                    <p>送货日期：</p>
                    <Input
                        onChange={this.handleSendTimeInput}
                    />
                    <p>入库日期：</p>
                    <Input
                        placeholder="格式：YYYY-MM-DD HH:mm:ss"
                        onChange={this.handleEnterTimeInput}
                    />
                    <p>仓库号：</p>
                    <Input
                        onChange={this.handleWarehouseIdInput}
                    />
                    <p>零件号：</p>
                    <Input
                        onChange={this.handlePartIdInput}
                    />
                    <p>数量：</p>
                    <Input
                        onChange={this.handleNumberInput}
                    />
                    <p>检验人：</p>
                    <Input
                        onChange={this.handleCheckoutInput}
                    />
                    <p>实出数量：</p>
                    <Input
                        onChange={this.handleAccountInput}
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
    visible: state.getIn(['import', 'updateVisible']),
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
