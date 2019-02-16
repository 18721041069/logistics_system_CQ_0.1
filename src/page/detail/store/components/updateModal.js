import React, { PureComponent } from 'react';

import 'antd/dist/antd.css';
import {
    Modal, Input,
} from 'antd';
import {connect} from "react-redux";
import {actionCreators} from "../store";

class UpdateModal extends PureComponent {

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
    visible: state.getIn(['store', 'updateVisible']),
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
