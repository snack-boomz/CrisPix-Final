import React, { useState, useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { AppContext } from "../AppContext";
import Styled from 'styled-components';


// background-image: 'url(${heroImage.urls.full})';

const HeroImage = Styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 400px;
padding-bottom: 15px;
background-image: url(https://getwallpapers.com/wallpaper/full/5/a/e/74906.jpg);
width: 100%;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: relative;
`


export const Search = () => {
    const { imagesArray, setSearchList, inputText, setInputText, heroImage, setHeroImage } = useContext(AppContext);

    // const randomHeroImage = () => {
    //     const randomIndex = Math.floor(Math.random() * imagesArray.length);
    //     const heroImage = imagesArray[randomIndex];
    //     console.log(randomIndex);
    //     return (
    //         setHeroImage(heroImage)
    //     )
    // }

    // useEffect(() => {
    //     return (randomHeroImage())
    // }, [imagesArray])

    // console.log(heroImage)


    useEffect(() => {
        let filteredList = imagesArray.filter((element) => {
            if (inputText === "") {
                return true;
            } else if (element.description === null) {
                return false;
            } else {
                return element.description.toLowerCase().includes(inputText);
            }
        });
        setSearchList(filteredList);
    }, [inputText]);

    let inputHandler = (e) => {
        //e.preventDefault();
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (

        <HeroImage>
            <div>
                <TextField
                    sx={{
                        "& .MuiInputBase-root": {
                            backgroundColor: 'white',
                            opacity: .6,
                            color: 'purple',
                            fontWeight: 'bold',
                            width: 400
                        }
                    }}
                    id="outlined-basic"
                    className="search-bar"
                    onChange={inputHandler}
                    variant="outlined"
                    fullWidth
                    label="Search"
                    color="secondary"
                    focused
                />
            </div>
        </HeroImage>
    );

}

