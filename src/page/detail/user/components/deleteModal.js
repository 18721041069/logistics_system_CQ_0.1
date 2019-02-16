import React, { PureComponent } from 'react';

import 'antd/dist/antd.css';
import {
    Modal, Input,
} from 'antd';
import {connect} from "react-redux";
import {actionCreators} from "../store";

class DeleteModal extends PureComponent {

    state = {
        deleteID: '',
    };

    handleDeleteInput = (event) => {
        this.setState({
            deleteID: event.target.value,
        });
    };

    render() {

        const { visible, changeDeleteVisible, deleteItem } = this.props;

        return (
            <div>
                <Modal
                    title="请输入以下信息"
                    visible={visible}
                    onOk={() => deleteItem(this.state.deleteID)}
                    onCancel={() => changeDeleteVisible(false)}
                    maskClosable={false}
                    okText="删除"
                    cancelText="取消"
                    destroyOnClose={true}
                >
                    <p>Object ID：</p>
                    <Input
                        onChange={this.handleDeleteInput}
                    />
                </Modal>
            </div>
        );
    }
}

const mapState = (state) => ({
    visible: state.getIn(['user', 'deleteVisible']),
});

const mapDispatchToProps = (dispatch) => ({
    changeDeleteVisible(state){
        dispatch(actionCreators.changeDeleteVisible(state));
    },
    deleteItem(deleteID){
        dispatch(actionCreators.handelDeleteItem(deleteID));
        dispatch(actionCreators.changeDeleteVisible(false));
        dispatch(actionCreators.getTableData());
        dispatch(actionCreators.changeSearch(false));
    }
});

export default connect(mapState, mapDispatchToProps)(DeleteModal);
