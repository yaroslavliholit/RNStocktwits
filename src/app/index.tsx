import React from 'react';
import styled from 'styled-components/native';
import withStorybook from '../shared/hocs/withStorybook';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  text-align: center;
`;

const App = () => {
  return (
    <Container>
      <Title>RNStocktwits</Title>
    </Container>
  );
};

export default withStorybook(App);
