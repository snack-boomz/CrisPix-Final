import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../AppContext';
import {Card} from '../Card';





const Photographers = () => {
    const { indivImage, imagesArray} = useContext(AppContext);
    const [photographers, setPhotographers] = useState([]);

    console.log(imagesArray);
    let photographersArray = [];
    for (let iterator = 0; iterator < imagesArray.length; iterator++) {
        
    photographersArray.push(imagesArray[iterator].user);
            
    }

    let uniqueUserImages = new Set();

    for (let iterator = 0; iterator < photographersArray.length; iterator++) {
        uniqueUserImages.add(photographersArray[iterator].profile_image.large)
    }
    let imagesCopy = imagesArray.slice();
    let indivUser = [...new Set(imagesCopy.map(image => image.user))];
    console.log(uniqueUserImages);
    console.log(indivUser);

    let uniqueImages = [];

    for (let image of uniqueUserImages) {
        uniqueImages.push(image)
    }
    return (
        <>
            <div>
                {uniqueImages.map((photographerImage, index) => {
                    return <img src={photographerImage} alt="photographer-photo" /> }   
                )}
            </div>
        </>
    )
    
}


/*
                                    {imageTarget === image.urls.small ? 
                                <>
                                    <h4>Username: {image.user.name}</h4>
                                    <h4>Location: {image.user.location}</h4>
                                      <FaIcons.FaStar onClick={(element) => { !favorites.includes(image) ?  makeFavorite(image) : unFavorite(image);}}
                                     className={(image.liked_by_user && favorites.includes(image)) ? 'yellowButton' : 'favButton' }/> <a className="downColorButton" target="_blank" href={image.urls.full} download=""><FaIcons.FaDownload className="downloadButton" onClick={() => console.log("CLICK DOWNLOAD")}/></a>
                                </>
                                : <></>
*/

export default Photographers;
