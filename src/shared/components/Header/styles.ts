import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid lightgray;
  height: 50px;
`;

export const Menu = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 100%;
  border-right-color: lightgray;
  border-right-width: 1px;
`;

export const Search = styled.View`
  width: 85%;
`;
