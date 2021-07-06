import styled from 'styled-components/native';

export const SuggestionsWrapper = styled.View`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  padding: 0 5px;
  background-color: ${({theme}) => theme.colors.bg.primary};
`;
