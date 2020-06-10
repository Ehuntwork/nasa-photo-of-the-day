import React,{useState, useEffect} from 'react';
import axios from 'axios';
import ImageDescription from './imageInfo/imageDescription'
import PageTitle from './pageTittle';

function NasaImage(){
    const [data , setData] = useState([]);
    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            .then(res => {
                setData(res.data)
            })
            .catch(err => {console.log('Error',err)})
    }, []);

    return <div className='mainContent'>
        <PageTitle/>
        <img src={data.url} alt='Nasa'/>
        <ImageDescription imageData = {data}/>
    </div>;
}

export default NasaImage;