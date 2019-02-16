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
    visible: state.getIn(['import', 'addVisible']),
    administrator_id: state.getIn(['login', 'administrator_id']),
});

const mapDispatchToProps = (dispatch) => ({
    changeAddVisible(state){
        dispatch(actionCreators.changeAddVisible(state));
    },
    addItem(addData, administrator_id){
        addData.enter_time=moment().format('YYYY-MM-DD HH:mm:ss');
        addData.administrator_id=administrator_id;
        dispatch(actionCreators.handelAddItem(addData));
        dispatch(actionCreators.changeAddVisible(false));
        dispatch(actionCreators.getTableData());
        dispatch(actionCreators.changeSearch(false));
    }
});

export default connect(mapState, mapDispatchToProps)(AddModal);
