import React from 'react';
import Spacer from '../components/Spacer';

function storybookSpacerDecorator(decorator: any) {
  return (
    <Spacer
      positionType={['right', 'left', 'top', 'bottom']}
      sizeType={'medium'}>
      {decorator()}
    </Spacer>
  );
}

export default storybookSpacerDecorator;
