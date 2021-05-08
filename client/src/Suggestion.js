import React from "react";
import styled from "styled-components";
import Movie from "./Movie";

const Suggestion = ({ movies, searchValue, nominateMovie, nominated }) => {
  return (
    <div>
      <H3>
        {searchValue.length > 0 ? (
          <DIV>
            <span>Results for "</span>
            {searchValue}
            <span>"</span>
          </DIV>
        ) : (
          ""
        )}
      </H3>

      <Ul>
        {movies.map((movie, index) => {
          return (
            <Movie
              movie={movie}
              key={index}
              searchValue={searchValue}
              nominateMovie={nominateMovie}
              nominated={nominated}
            />
          );
        })}
      </Ul>
    </div>
  );
};

const DIV = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
`;

const Ul = styled.ul`
  margin-left: -40px;
  overflow-y: scroll;
  height: 470px;
  @media only screen and (max-width: 532px) {
    height: 270px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    height: 970px;
  }
`;

const H3 = styled.h3`
  margin-left: 40px;
`;

export default Suggestion;
