import React, { Component, useState }  from 'react';
import styled from 'styled-components';

const ButtonDesign = styled.button`
   box-sizing: border-box;
   margin-top: 325px;
   margin-bottom: 15px;
   margin-left: -240px;
   text-align: center;
   padding: 10px 48px;
   color: #451c7f;
   background-color: white;
   border: 1px solid;
   border-color: #451c7f;
   border-radius: 20px;
   font-family: Spartan, sans-serif;
   font-size: 24px;

   &:hover:not(:disabled),
   &:active:not(:disabled),
   &:focus {
       outline: 0;
       color: white;
       border-color: #451c7f;
       background-color: #451c7f;
       cursor: pointer;
   }
 `


export default function Button () {
 
    return (
        <ButtonDesign>Submit</ButtonDesign>
    )
}