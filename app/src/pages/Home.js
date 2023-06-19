import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../AppContext';
import {Card} from '../Card';
import Styled from 'styled-components';

const Home = () => {
    const { imagesArray, searchList, inputText } = useContext(AppContext);
    return (
        <Wrapper>
            <Card imagesArray={inputText.length ? searchList : imagesArray}/>
        </Wrapper>
    )
}

const Wrapper = Styled.div`
  width: 100%;
  max-width: 1570px;
  margin-left: auto;
  margin-right: auto;
`

export default Home;
