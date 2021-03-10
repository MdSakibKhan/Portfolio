import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Songs extends Component {
    render() {
        return (
            <div>
                <div className="container rounded ">
                <ReactPlayer
                width = '100%'
                height = '480px'
                controls 
                url = 'https://www.youtube.com/watch?v=ki6HmAHZuxw'
                ></ReactPlayer>
                </div>
            </div>
        );
    }
}

export default Songs;