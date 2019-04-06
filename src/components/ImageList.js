import React from 'react';

const ImageList=(props)=>{
    const images=props.image.map((im)=>{
        return <img src={im.urls.regular} />
    })
    return(
        <div>{images}</div>
    )
};
export default ImageList;