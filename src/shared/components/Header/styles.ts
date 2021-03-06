import styled from 'styled-components/native';
import {center} from '../../../app/theme/commonStyles';

export const Container = styled.View`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({theme}) => theme.colors.bg.secondary};
  height: 50px;
  width: 100%;
`;

export const SearchArea = styled.View<{isSearchFocused?: boolean}>`
  width: ${props => (props.isSearchFocused ? '100%' : '85%')};
`;

export const MenuButton = styled.TouchableOpacity`
  width: 15%;
  height: 100%;
  border-right-color: ${({theme}) => theme.colors.bg.secondary};
  border-right-width: 1px;
  ${center}
`;
