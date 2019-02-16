import React, { PureComponent } from 'react';

import Header from '../common/header';
import { DetailWrapper } from '../style.js';

import InfoTable from './components/table';
import Actions from './components/actions';
import {actionCreators as headerActionCreators} from "../common/header/store";
import {connect} from "react-redux";
import {actionCreators} from "./store";

class Finance extends PureComponent {
    componentWillMount() {
        this.props.activeWhichButton('finance');
        this.props.changeSearch(false)
    }

    render() {
        return(
            <div>
                <Header/>
                <DetailWrapper>
                    <Actions />
                    <InfoTable />
                </DetailWrapper>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => ({
    activeWhichButton(whichButton){
        dispatch(headerActionCreators.activeWhichButton(whichButton));
    },
    changeSearch(state){
        dispatch(actionCreators.changeSearch(state));
    },
});

export default connect(null, mapDispatchToProps)(Finance);