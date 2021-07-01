import React, {memo, FC} from 'react';
import {ViewProps, TouchableOpacityProps} from 'react-native';

import Icon from '../Icon';
import Typography from '../Typography';
import * as S from './styles';

export interface Props extends ViewProps {
  label: string;
  color?: string;
  onDelete?: () => void;
  deletable?: boolean;
  withRoundCorners?: boolean;
}

export interface ChipLabelContainerProps extends TouchableOpacityProps {
  color?: string;
  deletable?: boolean;
}

const Chip: FC<Props> = props => {
  const {label, color, deletable, onDelete} = props;

  return (
    <S.Chip {...props}>
      <S.ChipLabelContainer deletable={deletable} color={color}>
        <Typography variant={'button'}>{label}</Typography>
      </S.ChipLabelContainer>
      {deletable && (
        <S.DeleteArea onPress={onDelete}>
          <Icon type="trash" fill={'#ffffff'} width={14} height={14} />
        </S.DeleteArea>
      )}
    </S.Chip>
  );
};

export default memo(Chip);
