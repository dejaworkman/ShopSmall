import React, { Component, useState }  from 'react';
import styled from 'styled-components';
import {AiOutlineSearch, AiOutlineClose} from 'react-icons/ai';

//${(props) => (props.isSearching ? 360 : 48)}px

const SearchContainer = styled.div`
    position: center;
    width: 360px;
    height: 48px;
    background: #f2f2f2;
    border-radius: 0;
    display: center;
    align-items: center;
    justify-content: space-between;
    padding-left: 5px;
    transition: all 0,3s ease;
`;

const SearchInput = styled.input`
    padding-left: 48px;
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #f2f2f2;
    outline: none;
    font-size: 16px;
    border: 1px solid transparent;

    &:focus {
        border-color: rgba(0, 0, 0, 0.3);
    }
`;

const IconButton = styled.button`
    position: relative;
    height: 36pm;
    width: 36px;
    z-index: 1;
    border: none;
    cursor: pointer;
    background: none;

    &:hover{
        color: white;
        &::after {
            opacity: 1;
            transform: scale(1);
        }
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        border-radius: 50%;
        z-index: -1;
        background: #000;
        transition: 0.2s ease;
        transform: scale(0.6);
        opacity: 0;
    }
`;



export default function Searchbar () {
    const [isActive, setIsActive] = useState(false);

        const _toggleSearch = () => {
            setIsActive(!isActive);
        }
 
    return (
        <SearchContainer isSearching={isActive}>
            <IconButton onClick={_toggleSearch}>
                {isActive ? (
                    <AiOutlineClose size={18} />

                ) : (

                    <AiOutlineSearch size={22} />

                )}
            </IconButton>
            <SearchInput />
        </SearchContainer>
    )
}