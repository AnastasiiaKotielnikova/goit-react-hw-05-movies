import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 50px 100px;
  button {
    width: 100px;
    padding: 5px;
    background-color: blue;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
    font-family: 'Exo', sans-serif;
    border-radius: 4px;
    border: none;
    outline: none;
    &.active {
      background-color: yellow;
    }
    &:hover,
    &:focus {
      color: #ffffff;
      background-color: yellow;
    }
  }
`;

export const Error = styled.h2`
  text-align: center;
  margin-top: 100px;
`;
