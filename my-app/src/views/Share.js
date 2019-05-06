import React, { Component } from 'react';
import './css/Share.css';

class Share extends Component {
    constructor(props) {
        super(props);
        this.state = {
        shareOpen: "closeShare",
        toggleButtonText: "Share this"
        };
        this.shareOpenToggle = this.shareOpenToggle.bind(this);
    }
    shareOpenToggle() {
    if (this.state.shareOpen==="closeShare") {
        this.setState({
            shareOpen:"openShare",
            toggleButtonText: "Hide sharing options"
        });
    } else {
        this.setState({
            shareOpen: "closeShare",
            toggleButtonText: "Share this"
            });
        }
    }
    }
    render() {
    const  url = window.location.href;
    const facebookUrl = 'https://wwww.facebook.com/sharer/sharer.php?u=${url}';
    const twitterUrl = 'https://wwww.twitter.com/home?status=${url}';
    const linkedinUrl = 'https://wwww.linkedin.com/shareArticle?mini=true&url=${url}';

}
        return (
            <div className="ShareContainer">
                <div>
                    <button className="ShareButton" onClick={this.shareOpenToggle}>{this.state}>{this.state.toggleButtonText}</button>
                </div>
                <div className={this.state.shareOpen}>
                    <a href={facebookUrl} target="_blank"> <i className="fa fa-facebook-square"></i></a>
                    <a href={twitterUrl} target="_blank"> <i className="fa fa-twitter-square"></i></a>
                    <a href={linkedinUrl} target="_blank"> <i className="fa fa-linkedin-square"></i></a>
                </div>
            </div>
        );
    }
}

export default Share;