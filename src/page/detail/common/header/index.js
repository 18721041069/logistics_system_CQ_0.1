import React, { PureComponent } from 'react';
import moment from 'moment';

import { actionCreators as loginActionCreators } from '../../../login/store';
import { Link } from 'react-router-dom';

import {
    HeaderWrapper,
    TitleWrapper,
    Title,
    ButtonWrapper,
    Button
} from './style.js';
import {actionCreators} from "./store";
import {connect} from "react-redux";

class Header extends PureComponent {

    constructor() {
        super();
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timer = setInterval(()=>this.tick(),1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({
            date : new Date()
        })
    }
    render() {
        const {whichButton, logout} = this.props;
        return(
            <HeaderWrapper>
                <TitleWrapper>
                    <Title>
                    生产企业供应链物流管理系统
                    </Title>
                    {moment().format('YYYY-MM-DD HH:mm:ss')}
                </TitleWrapper>
                <ButtonWrapper>
                    <Link to='/home'><Button
                        className={whichButton=== 'home' ? 'active': ''}
                    >首页</Button></Link>

                    <Link to='/entry_warehouse'><Button
                        className={whichButton=== 'entry_warehouse' ? 'active': ''}
                    >入库管理</Button></Link>

                    <Link to='/delivery_warehouse'><Button
                        className={whichButton=== 'delivery_warehouse' ? 'active': ''}
                    >出库管理</Button></Link>

                    <Link to='/workshop_dispatch'><Button
                        className={whichButton=== 'workshop_dispatch' ? 'active': ''}
                    >车间配送管理</Button></Link>

                    <Link to='/sale_dispatch'><Button
                        className={whichButton=== 'sale_dispatch' ? 'active': ''}
                    >销售配送管理</Button></Link>

                    <Link to='/supplier'><Button
                        className={whichButton=== 'supplier' ? 'active': ''}
                    >供应商管理</Button></Link>

                    <Link to='/'><Button
                        className='right'
                        onClick={() => logout('home')}
                    >安全退出</Button></Link>
                    <div className='clear'/>
                </ButtonWrapper>
            </HeaderWrapper>
        )
    }
}

const mapState = (state) => ({
    whichButton: state.getIn(['header', 'whichButton'])
});

const mapDispatchToProps = (dispatch) => ({
    logout(whichButton){
        dispatch(actionCreators.activeWhichButton(whichButton));
        dispatch(loginActionCreators.logout());
    }
});

export default connect(mapState, mapDispatchToProps)(Header);