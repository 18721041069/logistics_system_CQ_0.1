import React, { PureComponent } from 'react';

import {connect} from "react-redux";

import Table1 from './table1';
import Table2 from './table2';

class RightInfo extends PureComponent {
    render() {
        const { entryList } = this.props;

        if(entryList === 1) {
            return (
                <Table1 />
            )
        }else if(entryList === 2) {
            return (
                <Table2 />
            )
        }
    }
}

const mapState = (state) => ({
    entryList: state.getIn(['entry', 'entryList'])
});

export default connect(mapState, null)(RightInfo);