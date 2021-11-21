import React from 'react';
import { withRouter } from "react-router-dom";

import workFromHome from "../assets/images/wfh.gif";

class Gif extends React.Component {
    render() {
        return(
            <div className="parentGap">
                <img src={workFromHome} alt="no gif" />
                <div>
                <button onClick={() => this.props.history.push({
                    pathname: '/video',
                    state: { videoId: localStorage.getItem("videoId")}})}>
                        Back</button>
                </div>      
            </div>
            
        );
    }
}

export default withRouter(Gif);