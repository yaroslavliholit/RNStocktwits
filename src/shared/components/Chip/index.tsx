import React, {memo, FC, useCallback} from 'react';
import {TouchableOpacityProps} from 'react-native';

import Typography from '../Typography';
import * as S from './styles';

export interface Props extends TouchableOpacityProps {
  label: string;
  color?: string;
  withRoundCorners?: boolean;
  onItemPress?: (label: string) => void;
}

const Chip: FC<Props> = props => {
  // region ********** DATA **********
  const {label, onItemPress} = props;
  // endregion

  // region ********** CALLBACKS **********
  const handlePress = useCallback(() => {
    if (onItemPress) {
      onItemPress(label);
    }
  }, [label, onItemPress]);
  // endregion

  // region ********** JSX **********
  return (
    <S.Chip {...props} onPress={handlePress}>
      <Typography variant={'button'}>{label}</Typography>
    </S.Chip>
  );
  // endregion
};

export default memo(Chip);
