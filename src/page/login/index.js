import React, { PureComponent } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import 'antd/dist/antd.css';
import {
    Form, Icon, Input, Button
} from 'antd';
import { LoginTitle, LoginBoxTitle, LoginWrapper, LoginBox  } from './style';
import { actionCreators } from './store';

class Login extends PureComponent{

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.login(values.userName, values.password);
            }
        });
    };

    render(){
        const { loginStatus } = this.props;
        const { getFieldDecorator } = this.props.form;

        if(!loginStatus) {
            return (

                <LoginWrapper>
                    <LoginTitle>
                        生产企业供应链物流管理信息系统
                    </LoginTitle>
                    <LoginBoxTitle>
                        用户登录 User Login
                    </LoginBoxTitle>
                    <LoginBox>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('userName')(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="登录名" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password')(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button"
                                    style={{ padding: '0px 160px' }}
                                >
                                    登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to='/home' />
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
});

const mapDispatchToProps = (dispatch) => ({
    login(accountElem, passwordElem){
        dispatch(actionCreators.login(accountElem, passwordElem));
    }
});

Login = Form.create({})(Login);
export default connect(mapState, mapDispatchToProps)(Login);