import React, { PureComponent } from 'react';

import { DetailWrapper } from '../style.js';
import RightInfo from './components/rightInfo';
import Header from '../common/header';
import {actionCreators} from "../common/header/store";
import {connect} from "react-redux";

class EntryWarehouse extends PureComponent {
    render() {
        return(
            <div>
                <Header />
                <DetailWrapper>
                    <RightInfo />
                </DetailWrapper>
            </div>
        )
    }
    componentWillMount() {
        this.props.activeWhichButton('entry_warehouse')
    }
}

const mapDispatchToProps = (dispatch) => ({
    activeWhichButton(whichButton){
        dispatch(actionCreators.activeWhichButton(whichButton));
    }
});

export default connect(null, mapDispatchToProps)(EntryWarehouse);