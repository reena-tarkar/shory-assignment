import React from 'react';
import { withRouter } from "react-router-dom";
import "../styles/common.css";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            videoUrl: "",
            showVideo: false,
            videoId: "",
        };
    }

    saveUrl(event) {
        this.setState({videoUrl: event.target.value});
    }

    keyPressed(event) {
        if(event.charCode === 13) {
            this.navigateToVideo();
        }
    }

    navigateToVideo () {
        let extractId = this.state.videoUrl.split("v=")[1];
        if(extractId) {
                const ampersandPosition = extractId.indexOf('&');
                if(ampersandPosition !== -1) {
                    extractId = extractId.substring(0, ampersandPosition);
                }
                this.setState({ videoId: extractId, showVideo: true });
                this.props.history.push({
                pathname: '/video',
                state: { videoId: extractId }
            });
        }
    }

    render() {
        return(
            <div className="container">
                <span>Enter Youtube url: </span>
                <input autoFocus type="text" value={this.state.videoUrl} onKeyPress={(event) => this.keyPressed(event)} onChange={(event) => this.saveUrl(event) }/>
                <button onClick={() => this.navigateToVideo()}>Save</button>
            </div>
        );
    }
}

export default withRouter(Home);