import React, {memo, FC, useCallback} from 'react';
import {TouchableOpacityProps} from 'react-native';

import Typography from '../Typography';
import * as S from './styles';

export interface Props extends TouchableOpacityProps {
  label: string;
  color?: string;
  withRoundCorners?: boolean;
  onItemClick?: (label: string) => void;
}

const Chip: FC<Props> = props => {
  // region ********** DATA **********
  const {label, onItemClick} = props;
  // endregion

  // region ********** CALLBACKS **********
  const handleClick = useCallback(() => {
    if (onItemClick) {
      onItemClick(label);
    }
  }, [label, onItemClick]);
  // endregion

  // region ********** JSX **********
  return (
    <S.Chip {...props} onPress={handleClick}>
      <Typography variant={'button'}>{label}</Typography>
    </S.Chip>
  );
  // endregion
};

export default memo(Chip);
