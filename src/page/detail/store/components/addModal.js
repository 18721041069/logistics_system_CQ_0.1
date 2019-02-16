import React, { PureComponent } from 'react';

import 'antd/dist/antd.css';
import {
    Modal, Input,
} from 'antd';
import {connect} from "react-redux";
import {actionCreators} from "../store";

class AddModal extends PureComponent {

    state = {
        part_id: '',
        part_name: '',
        standard: '',
        unit: '',
        number: '',
        warehouse_id: '',
        remark: '',
        administrator_id: '',
    };

    handlePartIdInput = (event) => {
        this.setState({
            part_id: event.target.value,
        });
    };

    handlePartNameInput = (event) => {
        this.setState({
            part_name: event.target.value,
        });
    };

    handleStandardInput = (event) => {
        this.setState({
            standard: event.target.value,
        });
    };

    handleUnitInput = (event) => {
        this.setState({
            unit: event.target.value,
        });
    };

    handleNumberInput = (event) => {
        this.setState({
            number: event.target.value,
        });
    };

    handleWarehouseIdInput = (event) => {
        this.setState({
            warehouse_id: event.target.value,
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
                    <p>零件号：</p>
                    <Input
                        onChange={this.handlePartIdInput}
                    />
                    <p>零件名：</p>
                    <Input
                        onChange={this.handlePartNameInput}
                    />
                    <p>规格：</p>
                    <Input
                        onChange={this.handleStandardInput}
                    />
                    <p>单位：</p>
                    <Input
                        onChange={this.handleUnitInput}
                    />
                    <p>数量：</p>
                    <Input
                        onChange={this.handleNumberInput}
                    />
                    <p>仓库号：</p>
                    <Input
                        onChange={this.handleWarehouseIdInput}
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
    visible: state.getIn(['store', 'addVisible']),
    administrator_id: state.getIn(['login', 'administrator_id']),
});

const mapDispatchToProps = (dispatch) => ({
    changeAddVisible(state){
        dispatch(actionCreators.changeAddVisible(state));
    },
    addItem(addData, administrator_id){
        addData.administrator_id=administrator_id;
        dispatch(actionCreators.handelAddItem(addData));
        dispatch(actionCreators.changeAddVisible(false));
        dispatch(actionCreators.getTableData());
        dispatch(actionCreators.changeSearch(false));
    }
});

export default connect(mapState, mapDispatchToProps)(AddModal);
