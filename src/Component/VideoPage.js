import React from 'react';
import YouTube from "react-youtube";
import { withRouter } from "react-router-dom";

class Video extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            videoId: props.location?.state?.videoId || localStorage.getItem("videoId"),
            startTime: 0,
        };
        this.videoRef = React.createRef();
    }

    componentDidMount() {
        const date = Date.now();
        if(this.props.location.state.videoId === localStorage.getItem("videoId")) {
            const millis = date - localStorage.getItem("currentTime");
            const strtTime = Math.floor(millis / 1000);
            this.setState({ startTime: strtTime });
            console.log("now ", strtTime);
        } else {
            localStorage.setItem("currentTime", date);
            localStorage.setItem("videoId", this.props.location?.state?.videoId);
        }
    }

    render() {
        const options = {
            height: '390',
            width: '640',
            playerVars: {
            autoplay: 1,
            start: this.state.startTime,
        }};

        if(this.state.videoId) {
            return (
                <div className="parentGap">
                    <YouTube
                        ref={this.videoRef}
                        videoId={this.state.videoId}
                        opts = {options}
                    />
                    <button onClick={() => this.props.history.push("/home")}>Edit URL</button>
                    <button onClick={() => this.props.history.push("/gif")}>GIF</button>
                </div>
            );
        } 
        return null;
    }
}

export default withRouter(Video);