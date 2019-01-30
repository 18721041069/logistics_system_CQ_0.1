import * as constants from './constants';
import axios from 'axios';

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
});

export const logout = () => ({
    type: constants.LOGOUT,
    value: false
});

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json').then((res) => {
            let result = false;
            const users = res.data.users;
            for (let i = 0, length = users.length; i < length; i++) {
                let item = users[i];
                if(item.username === account && item.password === password){
                    result = true;
                }
            }
            if(result){
                dispatch(changeLogin())
            }else{
                alert('用户名或密码错误！');
            }
        }).catch(() => {
            alert('后台连接失败，请稍后再试！');
        })
    }
};