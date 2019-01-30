import React, { PureComponent } from 'react';

import 'antd/dist/antd.css';
import {
    Form, Input, Button,
} from 'antd';
import {actionCreators} from "../store";
import {connect} from "react-redux";

class AddForm extends PureComponent {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('添加供应商信息：', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const { onClose } = this.props;

        return(
            <Form
                layout="vertical"
                onSubmit={this.handleSubmit}
            >
                <Form.Item
                    {...formItemLayout}
                    label="供应商名称"
                >
                    {getFieldDecorator("供应商名称",{
                        rules: [{
                            required: true,
                            message: '不能为空！',
                        }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="地址"
                >
                    {getFieldDecorator("地址",{
                        rules: [{
                            required: true,
                            message: '不能为空！',
                        }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="邮政编码"
                >
                    {getFieldDecorator("邮政编码",{
                        rules: [{
                            required: true,
                            message: '不能为空！',
                        }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="联系电话"
                >
                    {getFieldDecorator("联系电话",{
                        rules: [{
                            required: true,
                            message: '不能为空！',
                        }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="传真号码"
                >
                    {getFieldDecorator("传真号码",{
                        rules: [{
                            required: true,
                            message: '不能为空！',
                        }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="开户银行"
                >
                    {getFieldDecorator("开户银行",{
                        rules: [{
                            required: true,
                            message: '不能为空！',
                        }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="银行账号"
                >
                    {getFieldDecorator("银行账号",{
                        rules: [{
                            required: true,
                            message: '不能为空！',
                        }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="备注"
                >
                    {getFieldDecorator("备注",{
                        rules: [{
                            required: true,
                            message: '不能为空！',
                        }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        onClick={onClose}
                        style={{ marginRight: 30 }}
                    >添加</Button>
                    <Button
                        type="primary"
                        onClick={onClose}
                    >取消</Button>
                </Form.Item>
            </Form>
        )
    }
}

const mapState = (state) => ({
    columns: state.getIn(['supplier', 'columns']),
});

const mapDispatchToProps = (dispatch) => ({
    onClose(){
        dispatch(actionCreators.changeModalVisible(false));
    }
});

AddForm = Form.create({})(AddForm);
export default connect(mapState, mapDispatchToProps)(AddForm);