import React from 'react';
import ImgC from 'react-image-component';
import data from '../../json/data.json';

let Client = React.createClass({

    render() {
        return(
            <div>
                <h1>{data.name}</h1>
                <ImgC src={"react.png"} aspectRatio={0.1} />
            </div>
        );
    }
});

export default Client;