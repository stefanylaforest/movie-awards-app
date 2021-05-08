import React from "react";
import styled, { keyframes } from "styled-components";
import posterdefault from "./assets/posterdefault.jpg";

const Movie = ({ movie, searchValue, nominateMovie, nominated }) => {
  // check if movie has been nominated for disable button
  let checkNominated = false;
  for (let i = 0; i < nominated.length; i++) {
    if (nominated[i].imdbID === movie.imdbID) {
      checkNominated = true;
    }
  }

  return (
    <>
      {searchValue.length >= 2 ? (
        <Row key={movie.imdbID}>
          <Poster
            src={movie.Poster !== "N/A" ? movie.Poster : posterdefault}
            alt={`Movie Poster for ${movie.Title}`}
          />
          <Column>
            <p>
              <Span>{movie.Title}</Span>
              <span> ({movie.Year})</span>
            </p>

            <Button
              buttonKey={movie.imdbID}
              disabled={checkNominated ? true : false}
              onClick={() => {
                nominateMovie(movie);
              }}
            >
              Nominate
            </Button>
          </Column>
        </Row>
      ) : null}
    </>
  );
};

const moveInDown = keyframes`
   0% {
    opacity: 0;
    transform: translateY(-10rem);
    }

    25% {
    opacity: 0;
    transform: translateY(-10rem);
    }

    75% {
    opacity: 0;
    transform: translateY(-10rem);
    }
 
    100% {
    opacity: 1;
    transform: translate(0);
    }`;

const Poster = styled.img`
  height: 120px;
  width: 80px;
  margin: 10px;
  object-fit: cover;
  border: 1px solid #373737;
  -webkit-filter: grayscale(100%);
  filter: brightness(110%);
  filter: grayscale(100%);
`;

const Column = styled.div`
  flex-direction: column;
`;

const Row = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 15px;
  margin: 20px 20px 20px 25px;
  border-radius: 15px;
  background-color: white;
  animation: ${moveInDown} 1s ease-in-out;

  &:hover {
    background-color: #eeeeee;
    cursor: pointer;
  }
`;

const Span = styled.span`
  font-weight: 600;
`;

const Button = styled.button`
  border-radius: 5px;
  background-color: #275eff;
  border: none;
  color: white;
  font-weight: 600;
  padding: 10px 15px;
  cursor: pointer;
  background: linear-gradient(to left, #275eff 50%, #373737 50%);
  transition: all 0.6s ease-out;
  background-size: 200% 100%;
  background-position: right bottom;
  &:hover {
    background-position: left bottom;
  }
  &:disabled {
    background-color: #f3f3f3;
    color: lightgray;
    cursor: not-allowed;
  }
`;

export default Movie;
