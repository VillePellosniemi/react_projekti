import React from 'react';
import './css/Likes.css';

class Likes extends React.Component {
    constructor() {
        super();
        this.state = {
            liked: false };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            liked: !this.state.liked });

    }

    render() {
        const text = this.state.liked ? '' : '';
        const label = this.state.liked ? 'Unlike' : 'Liked';
        return (
            React.createElement("div", { className: "customContainer" },
                React.createElement("button", { className: "btn btn-primary", onClick: this.handleClick },
                    label), React.createElement("p", null, "you ",
                    text, " ")));



    }}
export default Likes;
