import React, {memo, FC} from 'react';

import Spacer from '../Spacer';
import Typography from '../Typography';
import Chip from '../Chip';
import {getRandomColor} from '../../utils/color';
import * as S from './styles';

interface Props<T> {
  groupTitle: string;
  data: T[];
  onChipPress?: (el: T) => void;
}

const ChipGroup: FC<Props<string>> = ({groupTitle, data, onChipPress}) => (
  <>
    <Spacer positionType={'bottom'} sizeType={'medium'}>
      <Typography variant="subtitle">{groupTitle}</Typography>
    </Spacer>

    <S.ChipsContainer>
      {data.map(el => {
        const randomColor = getRandomColor();

        return (
          <Spacer
            key={el}
            positionType={['right', 'bottom']}
            sizeType={'small'}>
            <Chip label={el} color={randomColor} onItemPress={onChipPress} />
          </Spacer>
        );
      })}
    </S.ChipsContainer>
  </>
);

export default memo(ChipGroup);
