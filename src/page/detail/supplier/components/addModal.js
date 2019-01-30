import React, { PureComponent } from 'react';

import 'antd/dist/antd.css';
import { Modal } from 'antd';

import {actionCreators} from "../store";
import {connect} from "react-redux";

import AddForm from './addForm';

class AddModal extends PureComponent {
    render() {
        const { visible, onClose } = this.props;

        return(
            <Modal
                visible={visible}
                maskClosable={false}
                closable={false}
                footer={null}
                onCancel={onClose}
            >
                <AddForm />
            </Modal>
        )
    }
}


const mapState = (state) => ({
    visible: state.getIn(['supplier', 'addModalVisible']),
});

const mapDispatchToProps = (dispatch) => ({
    onClose(){
        dispatch(actionCreators.changeModalVisible(false));
    },
    onOpen(){
        dispatch(actionCreators.changeModalVisible(true));
    }
});

export default connect(mapState, mapDispatchToProps)(AddModal);