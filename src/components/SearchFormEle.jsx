import React from 'react'
import { CustomRadio } from './CustomRadio'
import styled from 'styled-components'

const SearchFormEle = ({ handleFormSubmit, searchStr, onRadioOptionChange, onSearchInputChange, option }) => {
    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <SearchInput type="text" placeholder="Search Something" value={searchStr} onChange={onSearchInputChange} />
                <RadiosWrapper>
                    <CustomRadio
                        id="movie"
                        name="option"
                        value="shows"
                        onChange={onRadioOptionChange}
                        checked={option === "shows"}
                    />
                    {/* <label htmlFor="movie">
                    Movie
                    <input id="movie" type="radio" name="option" value="shows" onChange={onRadioOptionChange} checked={option === "shows"} />
                </label> */}
                    <CustomRadio
                        id="actor"
                        type="radio"
                        name="option"
                        value="people"
                        onChange={onRadioOptionChange}
                        checked={option === "people"}
                    />
                    {/* <label htmlFor="actor">
                    Actor
                    <input id="actor" type="radio" name="option" value="people" onChange={onRadioOptionChange} checked={option === "people"} />
                </label> */}
                </RadiosWrapper>
                <SearchButtonWrapper>
                    <button type="submit">Search</button>
                </SearchButtonWrapper>
            </form>
        </>
    )
}

export default SearchFormEle


const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;


export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;