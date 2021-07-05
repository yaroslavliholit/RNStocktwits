import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  padding: 0 20px;
`;

export const RowContainer = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 50px;
  height: 50px;
  resize-mode: contain;
`;
