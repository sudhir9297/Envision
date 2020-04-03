import React from 'react';
import styled from 'styled-components';

const CustomButton=({children,...otherprops})=>(
    <Button {...otherprops}>
        {children}
    </Button>
)

export default CustomButton;

const Button=styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items:center;
    background-color: ${props=>props.color};
    border-radius:4px;
    transition: all .2s ease-in-out;

  
    &:hover {
        background-color: ${props=>props.color};
        border: none;
        transform: scale(1.1); 
        
    }

`