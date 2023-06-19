import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppContext } from "./AppContext";
import Styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import * as ImIcons from 'react-icons/im';
import { IconContext } from 'react-icons';
import './Card.css';


const StyledCard = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  padding-top: 1.5%;
  width: 80vw;
  background: white;
  box-shadow: 2px 2px 20px black;
`

const StyledInfo = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const FullImage = Styled.img`
    display: flex;
    width: 60%;
`

const FullDiv = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 10px;
background: linear-gradient(45deg, black, transparent);
`

const ArtistImage = Styled.img`
display: flex;
height: 10vw;
border-radius: 90px;
`

const ListDiv = Styled.div`
font-size: 20px;
width: 100%;

ul {
    width: 50%;
    margin: 0 auto;
    padding-inline-start: 0;
}

li{
    height: fit-content;
    list-style: none;
    margin: 0 auto;
    width: fit-content;
    font-color: black;
    padding: 10px;
    
  }
  a {
    color: black;
  }
    a:link {
    text-decoration: none;
}
  li:hover{
    transform: scale(1.05);
    border-radius: 10px;
    border: 1px solid black;
    background: linear-gradient(to right, rgb(233, 13, 218), rgb(21, 207, 241));;

  }

`

const ImageDiv = Styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
`

const UserDiv = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
padding: 0 10%;
`

const H4 = Styled.p`
padding-left: 30px;
padding-right: 30px;
`


export const PicDetails = () => {
    const context = useContext(AppContext);

    const navigate = useNavigate();

    if (context.indivImage.id == "") {
        navigate('/');
    }

    return (
        <FullDiv>
            <StyledCard>
                <ImageDiv>
                    <FullImage src={context.indivImage.urls.regular} alt={context.indivImage.urls.thumb} />
                </ImageDiv>
                <div>
                    <StyledInfo>
                        <p>Posted Date: {(context.indivImage.created_at.split("").slice(0,10))}<>&emsp;</><a className="downColorButton" target="_blank" href={context.indivImage.urls.full} download=""><FaIcons.FaDownload className="downloadButton" onClick={() => console.log("CLICK DOWNLOAD")}/></a></p> 
                        <p>Location: {context.indivImage.location === undefined ? 'Unknown' : context.indivImage.location.name}</p>
                        <p>Likes: {context.indivImage.likes}</p>
                        <p>Downloads: {context.indivImage.downloads}</p>
                        <p>Sponsorship: {context.indivImage.sponsorship === null ? 'N/A' : context.indivImage.sponsorship.tagline}</p>
                    </StyledInfo>
                </div>
                <UserDiv>
                    <div>
                        <ArtistImage src={context.indivImage.user.profile_image.large} alt={context.indivImage.user.profile_image.small} />
                    </div>
                        <h2>{context.indivImage.user.name}</h2>
                    <div>
                        <h2>{context.indivImage.user.bio}</h2>
                    </div>
                </UserDiv>

                <ListDiv>
                    <ul>
                        <li><a href={context.indivImage.user.links.html}><ImIcons.ImProfile/>User Profile</a></li>
                        <li><a href={`https://twitter.com/${context.indivImage.user.social.instagram_username}/`}><FaIcons.FaTwitterSquare/>Twitter</a></li>
                        <li><a href={`https://www.instagram.com/${context.indivImage.user.social.instagram_username}/?hl=en`}><ImIcons.ImInstagram/>Instagram</a></li>
                    </ul>
                </ListDiv>
            </StyledCard>
        </FullDiv>
    )
}

export default PicDetails;