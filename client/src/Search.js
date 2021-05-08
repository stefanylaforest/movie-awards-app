import React from "react";
import styled from "styled-components";
// import TextField from '@material-ui/core/TextField';

const Search = (props) => {
  return (
    <Container>
      <form>
        <P>Search a Movie Title</P>
        <SearchInput
          value={props.value}
          onChange={(event) => props.setSearchValue(event.target.value)}
          placeholder="example: Scary Movie"
        ></SearchInput>
      </form>
    </Container>
  );
};

const Container = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  padding: 20px;
`;

const P = styled.p`
  margin: 0px 0px 0px 15px;
  padding: 0;
`;

const SearchInput = styled.input`
  width: 80vw;
  padding: 5px 25px;
  margin: 10px 0px;
  height: 30px;
  /* border: 2px solid #d92b1b; */
  border: none;
  border-radius: 50px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  &:focus {
    outline: none;
  }
`;

export default Search;
