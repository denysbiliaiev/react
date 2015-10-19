import React from 'react';
import ImgC from 'react-image-component';

let Client = React.createClass({

    render() {
        return(
            <div>
                <h1>Client</h1>
                <ImgC src={"react.png"} aspectRatio={0.1} />
            </div>
        );
    }
});

export default Client;