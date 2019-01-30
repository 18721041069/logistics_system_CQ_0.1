import React, { PureComponent } from 'react';

import Header from '../common/header';
import { DetailWrapper } from '../style.js';

import InfoTable from './components/table';
import {actionCreators} from "../common/header/store";
import {connect} from "react-redux";

class Dispatch extends PureComponent {
    render() {
        return(
            <div>
                <Header/>
                <DetailWrapper>
                    <InfoTable />
                </DetailWrapper>
            </div>
        )
    }
    componentWillMount() {
        this.props.activeWhichButton('workshop_dispatch')
    }
}

const mapDispatchToProps = (dispatch) => ({
    activeWhichButton(whichButton){
        dispatch(actionCreators.activeWhichButton(whichButton));
    }
});

export default connect(null, mapDispatchToProps)(Dispatch);