import React from 'react';
import './Card.css';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from "./AppContext";
import Home from './pages/Home';
import styled from 'styled-components';
import { Search } from './pages/Searchbar'
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';


export const Card = ({ imagesArray }) => {
    const { indivImage, setIndivImage, favorites, setFavorites } = useContext(AppContext);
    const [ showInfo, setShowInfo ] = useState(false);
    const [ imageTarget, setImageTarget ] = useState('');
    const [ opaque, setOpaque ] = useState(false);
    const [ isFavorited, setIsFavorited ] = useState(1);
    const twoArr = imagesArray.length / 2;
    const thirdArr = imagesArray.length / 3; 
    let firstThirdOfImages = imagesArray.slice(0, thirdArr);
    let secondThirdOfImages = imagesArray.slice(thirdArr, thirdArr * 2);
    let thirdThirdOfImages = imagesArray.slice(thirdArr * 2, thirdArr * 3);
    let firstHalfOfImages = imagesArray.slice(0, twoArr);
    let secondHalfOfImages = imagesArray.slice(twoArr, twoArr * 2);
    let itIsFavorited = isFavorited % 2 == 0 ? true : false;
    
const makeFavorite = (image) => {
    image.liked_by_user = true;
    setFavorites([...favorites, image]);
}

const unFavorite = (image) => {
    image.liked_by_user = false;
    let favArrayCopy = favorites.slice();
    favArrayCopy.splice(favArrayCopy.indexOf(image), 1);

    setFavorites(favArrayCopy);
}

   /*
        <a rel="nofollow" download="" target="_blank" title="Download photo" href="https://unsplash.com/photos/zevKQbUrcbw/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjYxODgzOTgy&amp;force=true">
        <svg width="32" height="32" class="c_c7b" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z"></path></svg></a>
   */
    if (imagesArray.length === 1) {
        imagesArray.map((image, index) => image.counter = 1);
        return (
        <>
         <Search />
        <Container theme="one">
            <Column theme="one">
            {imagesArray.map((image, index) => <li key={index}><div>
                     <StyledInfo>
                     <Text onMouseOver={() => setShowInfo(true)} onMouseOut={() => setShowInfo(false)} className={showInfo ? 'setInfo' : 'hideInfo'}>
                                {imageTarget === image.urls.small ? 
                                <>
                                    <h4>Username: {image.user.name}</h4>
                                    <h4>Location: {image.user.location}</h4>
                                    <FaIcons.FaStar onClick={(element) => { !favorites.includes(image) ?  makeFavorite(image) : unFavorite(image);}}
                                     className={(image.liked_by_user && favorites.includes(image)) ? 'yellowButton' : 'favButton' }/> <a className="downColorButton" target="_blank" href={image.urls.full} download=""><FaIcons.FaDownload className="downloadButton" onClick={() => console.log("CLICK DOWNLOAD")}/></a>
                                </>
                                : <></>
                                }
                            
                        </Text>
                        <Link to={`/${image.id}`}>
                            <StyledImg onMouseOver={(element) => { setShowInfo(true); setImageTarget(element.target.currentSrc);}} onMouseOut={() => setShowInfo(false)} onClick = {() => {setIndivImage(image)}} src={image.urls.small} alt={image.urls.thumb} />                       
                        </Link>
                    </StyledInfo>
                </div></li>)}
            </Column>
        </Container>
        </>
        )
    } else if (imagesArray.length === 2) {
        return (
        <>
         <Search />
        <Container theme="two">
            <Column theme="two">
            {firstHalfOfImages.map((image, index) => <li key={index}><div>
                     <StyledInfo>
                     <Text onMouseOver={() => setShowInfo(true)} onMouseOut={() => setShowInfo(false)} className={showInfo ? 'setInfo' : 'hideInfo'}>
                                {imageTarget === image.urls.small ? 
                                <>
                                    <h4>Username: {image.user.name}</h4>
                                    <h4>Location: {image.user.location}</h4>
                                     <FaIcons.FaStar onClick={(element) => { !favorites.includes(image) ?  makeFavorite(image) : unFavorite(image);}}
                                     className={(image.liked_by_user && favorites.includes(image)) ? 'yellowButton' : 'favButton' }/> <a className="downColorButton" target="_blank" href={image.urls.full} download=""><FaIcons.FaDownload className="downloadButton" onClick={() => console.log("CLICK DOWNLOAD")}/></a>
                                </>
                                : <></>
                                }
                            
                        </Text>
                        <Link to={`/${image.id}`}>
                            <StyledImg onMouseOver={(element) => { setShowInfo(true); setImageTarget(element.target.currentSrc);}} onMouseOut={() => setShowInfo(false)} onClick = {() => {setIndivImage(image)}} src={image.urls.small} alt={image.urls.thumb} />                       
                        </Link>
                    </StyledInfo>
                </div></li>)}
            </Column>
            
            <Column theme="two">
            {secondHalfOfImages.map((image, index) => <li key={index}><div>
                     <StyledInfo>
                     <Text onMouseOver={() => setShowInfo(true)} onMouseOut={() => setShowInfo(false)} className={showInfo ? 'setInfo' : 'hideInfo'}>
                                {imageTarget === image.urls.small ? 
                                <>
                                    <h4>Username: {image.user.name}</h4>
                                    <h4>Location: {image.user.location}</h4>
                                      <FaIcons.FaStar onClick={(element) => { !favorites.includes(image) ?  makeFavorite(image) : unFavorite(image);}}
                                     className={(image.liked_by_user && favorites.includes(image)) ? 'yellowButton' : 'favButton' }/> <a className="downColorButton" target="_blank" href={image.urls.full} download=""><FaIcons.FaDownload className="downloadButton" onClick={() => console.log("CLICK DOWNLOAD")}/></a>
                                </>
                                : <></>
                                }
                            
                        </Text>
                        <Link to={`/${image.id}`}>
                            <StyledImg onMouseOver={(element) => { setShowInfo(true); setImageTarget(element.target.currentSrc);}} onMouseOut={() => setShowInfo(false)} onClick = {() => {setIndivImage(image)}} src={image.urls.small} alt={image.urls.thumb} />                       
                        </Link>
                    </StyledInfo>
                </div></li>)}
            </Column>
        </Container>
        </>
        )
    } else {
    return (
    <>
     <Search />
        <Container theme="three">
            <Column theme="three">
            {firstThirdOfImages.map((image, index) => <li key={index}><div>
                     <StyledInfo>
                     <Text onMouseOver={() => setShowInfo(true)} onMouseOut={() => setShowInfo(false)} className={showInfo ? 'setInfo' : 'hideInfo'}>
                                {imageTarget === image.urls.small ? 
                                <>
                                    <h4>Username: {image.user.name}</h4>
                                    <h4>Location: {image.user.location}</h4>
                                     <FaIcons.FaStar onClick={(element) => { !favorites.includes(image) ?  makeFavorite(image) : unFavorite(image)}}
                                     className={(image.liked_by_user && favorites.includes(image)) ? 'yellowButton' : 'favButton' }/> <a className="downColorButton" target="_blank" href={image.urls.full} download=""><FaIcons.FaDownload className="downloadButton" onClick={() => console.log("CLICK DOWNLOAD")}/></a>
                                </>
                                : <></>
                                }
                            
                        </Text>
                        <Link to={`/${image.id}`}>
                            <StyledImg onMouseOver={(element) => { setShowInfo(true); setImageTarget(element.target.currentSrc);}} onMouseOut={() => setShowInfo(false)} onClick = {() => {setIndivImage(image)}} src={image.urls.small} alt={image.urls.thumb} />                       
                        </Link>
                    </StyledInfo>
                </div></li>)}
            </Column>
            
            <Column theme="three">
            {secondThirdOfImages.map((image, index) => <li key={index}><div>
                     <StyledInfo>
                     <Text onMouseOver={() => setShowInfo(true)} onMouseOut={() => setShowInfo(false)} className={showInfo ? 'setInfo' : 'hideInfo'}>
                                {imageTarget === image.urls.small ? 
                                <>
                                    <h4>Username: {image.user.name}</h4>
                                    <h4>Location: {image.user.location}</h4>
                                      <FaIcons.FaStar onClick={(element) => { !favorites.includes(image) ?  makeFavorite(image) : unFavorite(image)}}
                                     className={(image.liked_by_user && favorites.includes(image)) ? 'yellowButton' : 'favButton' }/> <a className="downColorButton" target="_blank" href={image.urls.full} download=""><FaIcons.FaDownload className="downloadButton" onClick={() => console.log("CLICK DOWNLOAD")}/></a>
                                </>
                                : <></>
                                }
                            
                        </Text>
                        <Link to={`/${image.id}`}>
                            <StyledImg onMouseOver={(element) => { setShowInfo(true); setImageTarget(element.target.currentSrc);}} onMouseOut={() => setShowInfo(false)} onClick = {() => {setIndivImage(image)}} src={image.urls.small} alt={image.urls.thumb} />                       
                        </Link>
                    </StyledInfo>
                </div></li>)}
            </Column>
        
            <Column theme="three">
            {thirdThirdOfImages.map((image, index) => <li key={index}><div>
                     <StyledInfo>
                     <Text onMouseOver={() => setShowInfo(true)} onMouseOut={() => setShowInfo(false)} className={showInfo ? 'setInfo' : 'hideInfo'}>
                                {imageTarget === image.urls.small ? 
                                <>
                                    <h4>Username: {image.user.name}</h4>
                                    <h4>Location: {image.user.location}</h4>
                                      <FaIcons.FaStar onClick={(element) => { !favorites.includes(image) ?  makeFavorite(image) : unFavorite(image);}}
                                     className={(image.liked_by_user && favorites.includes(image)) ? 'yellowButton' : 'favButton' }/> <a className="downColorButton" target="_blank" href={image.urls.full} download=""><FaIcons.FaDownload className="downloadButton" onClick={() => console.log("CLICK DOWNLOAD")}/></a>
                                </>
                                : <></>
                                }
                            
                        </Text>
                        <Link to={`/${image.id}`}>
                            <StyledImg onMouseOver={(element) => { setShowInfo(true); setImageTarget(element.target.currentSrc);}} onMouseOut={() => setShowInfo(false)} onClick = {() => {setIndivImage(image)}} src={image.urls.small} alt={image.urls.thumb} />                       
                        </Link>
                    </StyledInfo>
                </div></li>)}
            </Column>
            
        </Container>
        </>
    )
}
};


const Column = styled.div`
    display: grid;
    row-gap: 24px;
    grid-template-columns: minmax(0,1fr);
    justify-content: center;
    width: 33%;
    height: fit-content;

    li {
    justify-content: center;
    width: fit-content;
    }
`


const Container = styled.div`
    display: grid;
    justify-content: center;
    grid-column-gap: 24px;
    grid-template-columns: repeat(3, minmax(0,1fr));
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    list-style: none;
`

const StyledImg = styled.img`
    margin-top: 10px;

`

const StyledInfo = styled.div`
    position: relative;

`
const Text = styled.div`
    position: absolute;
    bottom: 3%;
    z-index: 1;
    text-shadow: 0 0 10px black;
    color: white;
    padding-left: 5px;
    box-shadow: 2px 2px 20px black;
    border-radius: 5px;
    margin-left: 5px;
    margin-bottom: 5px;
    margin-right: 5px;
`
