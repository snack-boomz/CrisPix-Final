import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../AppContext';
import { Card } from '../Card';
import Styled from 'styled-components';

const Favorites = () => {
    const { favorites } = useContext(AppContext);
    return (
        <Wrapper>
           <Card imagesArray={favorites}/>
        </Wrapper>
      )      
}





const Wrapper = Styled.div`
  width: 100%;
  max-width: 1570px;
  margin-left: auto;
  margin-right: auto;
`

export default Favorites;

/* 

grid-template-columns: repeat(3,minmax(0,1fr)); -- container
width, grid-template-columns -- column
*/