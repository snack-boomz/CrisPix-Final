import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from "../AppContext";
import { Card } from '../Card';
import Styled from 'styled-components';


function Trending() {
  const { imagesArray, setTrending, trending, inputText, searchList } = useContext(AppContext);
  const filterForTrending = (image) => {
    if (image.likes >= 160) {
      return image;
    } else {
      
    }
  }
  const trendingImgs = imagesArray.filter(filterForTrending);

  useEffect(() => {
    setTrending(trendingImgs)
  }, [])
  
  
  return (
    <Wrapper>
       <Card imagesArray={inputText.length ? searchList : trending}/>
    </Wrapper>
  )
  
  
}

const Wrapper = Styled.div`
  width: 100%;
  max-width: 1570px;
  margin-left: auto;
  margin-right: auto;
`


export default Trending;
