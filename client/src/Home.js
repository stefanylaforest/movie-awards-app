import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import Search from "./Search";
import Suggestion from "./Suggestion";
import Nominations from "./Nominations";
//my api key stored securely
require("dotenv").config();
const { REACT_APP_MOVIE_API } = process.env;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [nominated, setNominated] = useState([]);
  const [nominatedCount, setNominatedCount] = useState(0);

  //fetch and typeahead
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${REACT_APP_MOVIE_API}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  //nominate a movie function
  const nominateMovie = (movie) => {
    if (nominated.length > 4) {
      return;
    }
    setNominatedCount(nominatedCount + 1);
    setNominated([...nominated, movie]);
  };

  //rendering localstored movies on page
  useEffect(() => {
    //get values in local storage
    let arrayOfValues = Object.values(localStorage);
    //push to nominated movies array if there is values in local storage
    if (arrayOfValues.length > 0) {
      arrayOfValues.forEach((movie) => {
        let storedMovies = JSON.parse(movie);
        nominated.push(storedMovies);
        setNominated(nominated);
        setNominatedCount(nominatedCount + nominated.length);
      });
    }
  }, []);

  //add movies to local storage
  useEffect(() => {
    nominated.forEach((movie) => {
      //limit local storage to 5 movies
      if (nominated.length > 5) {
        return;
      }
      //store nominated movie in local storage
      localStorage.setItem(movie.imdbID, JSON.stringify(movie));
    });
  }, [nominated]);

  // remove nominated movies
  const removeNomination = (movie) => {
    //removes from local storage
    localStorage.removeItem(movie.imdbID);
    //removes the count
    setNominatedCount(nominatedCount - 1);
    //removes from nominated array
    let updatedArray = [...nominated];
    updatedArray.splice(
      updatedArray.findIndex((m) => m.imdbID === movie.imdbID),
      1
    );
    //update the nominated movies array
    setNominated(updatedArray);
  };

  return (
    <>
      <Container>
        <Header />
        <div>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <Row>
          <ColumnOne>
            <Suggestion
              movies={movies}
              searchValue={searchValue}
              nominateMovie={nominateMovie}
              nominated={nominated}
            />
          </ColumnOne>
          <ColumnTwo>
            <Nominations
              nominated={nominated}
              removeNomination={removeNomination}
              nominatedCount={nominatedCount}
            />
          </ColumnTwo>
        </Row>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const ColumnOne = styled.div`
  flex: 55%;
`;

const ColumnTwo = styled.div`
  flex: 45%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default Home;
