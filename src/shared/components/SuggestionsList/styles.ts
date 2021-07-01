import styled from 'styled-components/native';

export const List = styled.FlatList`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
`;

export const ListItem = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 5px;
`;

export const ListLabelContainer = styled.View`
  width: 75%;
`;

export const ListIconContainer = styled.View`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
