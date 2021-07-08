import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const List = styled.FlatList`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ListItem = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: ${({theme}) => `${theme.spacing.m} 0px`};
`;

export const ListLabelContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 57%;
  margin-right: auto;
`;

export const ListIconContainer = styled.View<{positionType: 'left' | 'right'}>`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
