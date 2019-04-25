import React from 'react';

const VIDEOS = {
    Avicii: 'https://www.youtube.com/watch?v=_ovdm2yX4MA',
    Metallica: 'https://www.youtube.com/watch?v=KO3l6qNA2Q4',
    Juntti: 'https://www.youtube.com/watch?v=O3zg42Q7-b8',
    nukkumaan: 'https://www.youtube.com/watch?v=yedkIcCHkM0'
};



//--------------------------------------------
const App = React.createClass({
    getInitialState: function () {
        return { src: VIDEOS.deer};
    },

    chooseVideo: function (newVideo) {
        this.setState({
            src: VIDEOS[newVideo]
        });
    },

    render: function () {
        return (
            <div>
            <h1>React Video Player</h1>
        <Menu chooseVideo={this.chooseVideo} />
        <Video src={this.state.src} />
        </div>
    );
    }
});



//--------------------------------------------
var Video = React.createClass({
    render: function () {
        return (
            <div>
            <video
        controls
        autoPlay
        src={this.props.src} />
        </div>
    );
    }
});



//--------------------------------------------
const Menu = React.createClass({
    handleClick: function (e) {
        var text = e.target.value;
        this.props.chooseVideo(text);
    },

    render: function () {
        return (
            <form onClick={this.handleClick}>
            <input type="radio" name="src" value="avicii"/> Edamia
            <input type="radio" name="src" value="metallica" /> Hevii
            <input type="radio" name="src" value="juntti" /> hehehe
            <input type="radio" name="src" value="nukkumaan" /> romantiikkaa
            </form>
    );
    }
});

ReactDOM.render(<App />,
    document.getElementById('root')
);