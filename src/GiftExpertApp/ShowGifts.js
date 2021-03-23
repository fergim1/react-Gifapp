import React from 'react';

const ShowGifts = ({ title, url }) => {
    return (
        <div className = 'card-gifts'>
            <img src= { url } alt= {title}/>
            <p> { title } </p>
        </div>
    )
}

export default ShowGifts;