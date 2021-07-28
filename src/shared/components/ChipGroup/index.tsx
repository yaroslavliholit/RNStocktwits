import React, {memo, FC} from 'react';

import Spacer from '../Spacer';
import Typography from '../Typography';
import Chip from '../Chip';
import {getRandomColor} from '../../utils/color';
import * as S from './styles';

interface Props<T> {
  groupTitle: string;
  chips: T[];
  onChipClick?: (el: T) => void;
}

const randomColor = getRandomColor();

const ChipGroup: FC<Props<string>> = ({groupTitle, chips, onChipClick}) => (
  <>
    <Spacer positionType={'bottom'} sizeType={'medium'}>
      <Typography variant="subtitle">{groupTitle}</Typography>
    </Spacer>

    <S.ChipsContainer>
      {chips.map(el => (
        <Spacer key={el} positionType={['right', 'bottom']} sizeType={'small'}>
          <Chip label={el} color={randomColor} onItemClick={onChipClick} />
        </Spacer>
      ))}
    </S.ChipsContainer>
  </>
);

export default memo(ChipGroup);
