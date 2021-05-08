import React from "react";
import styled from "styled-components";

const Nominations = ({ nominated, removeNomination, nominatedCount }) => {
  return (
    <>
      <div>
        <H3>
          <div>Your Nominations:</div>
          <div>
            {nominated.length >= 5 ? (
              <Div>
                <SpanColored>5 out of 5 nominated!</SpanColored>
              </Div>
            ) : (
              <div>
                <Span>{nominatedCount} out of 5</Span>
              </div>
            )}
          </div>
        </H3>
        <Ul>
          {nominated.map((movie, index) => (
            <Column key={index}>
              <Li key={movie.imdbID}>
                <P>
                  <Span2>{movie.Title}</Span2>
                  <span> ({movie.Year})</span>
                </P>
                <Button
                  key={index}
                  onClick={(e) => {
                    removeNomination(movie);
                  }}
                >
                  Remove
                </Button>
              </Li>
            </Column>
          ))}
        </Ul>
      </div>
    </>
  );
};

export default Nominations;

const Column = styled.div`
  flex-direction: column;
`;

const Ul = styled.ul`
  margin-left: 40px;
`;

const Li = styled.li`
  background-color: white;
  align-items: center;
  padding: 20px;
  margin: 15px 0px 0px -40px;
  border-radius: 10px;
  list-style-type: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

const P = styled.p`
  color: #373737;
`;

const Span2 = styled.span`
  font-weight: 600;
  line-height: 1.6;
`;

const H3 = styled.h3`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin-left: 40px;
  justify-content: left;
`;

const Span = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: white;
  border-radius: 30px;
  background-color: #275eff;
  padding: 7px 15px 2px 15px;
  margin: 0px 10px;
`;

const SpanColored = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: white;
  @media only screen and (max-width: 532px) {
    flex-shrink: 1;
  }
`;

const Div = styled.div`
  border-radius: 30px;
  background-color: #e86d1c;
  padding: 7px 15px 2px 15px;
  margin: 0px 10px;
  flex-wrap: wrap;
`;

const Button = styled.button`
  border-radius: 5px;
  background-color: #373737;
  border: none;
  color: white;
  font-weight: 600;
  padding: 10px 15px;
  cursor: pointer;
`;
