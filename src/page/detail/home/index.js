import React, { PureComponent } from 'react';
import Header from '../common/header';
import { DetailWrapper, Image } from '../style.js';
import homePic from '../../../statics/images/home_img.png';
import {actionCreators} from "../common/header/store";
import {connect} from "react-redux";

class Home extends PureComponent {

    render() {
        return(
            <div>
                <Header/>
                <DetailWrapper>
                    <Image src={homePic} alt=''/>
                </DetailWrapper>
            </div>
        )
    }

    componentWillMount() {
        this.props.activeWhichButton('home')
    }
}

const mapDispatchToProps = (dispatch) => ({
    activeWhichButton(whichButton){
        dispatch(actionCreators.activeWhichButton(whichButton));
    }
});

export default connect(null, mapDispatchToProps)(Home);