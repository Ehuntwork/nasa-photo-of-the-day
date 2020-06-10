import React from 'react';
import Button from './button';

function ImageDescription(props){
    return <div>
        <h1>{props.imageData.title}</h1>
        <p className='date'>{props.imageData.date}</p>
        <p className='description'>{props.imageData.explanation}</p>
        <Button/>
    </div>;
}

export default ImageDescription;