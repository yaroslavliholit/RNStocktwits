import React, {memo, useReducer, FC} from 'react';
import {ViewProps, TouchableOpacityProps} from 'react-native';

import Icon from '../Icon';
import * as S from './styles';

export interface Props extends ViewProps {
  label: string;
  color?: string;
  onDelete?: () => void;
}

export interface ChipLabelContainerProps extends TouchableOpacityProps {
  color?: string;
  deletable: boolean;
}

const Chip: FC<Props> = props => {
  const {label, color, onDelete} = props;
  const [deletable, toggleDeletable] = useReducer(state => !state, false);

  return (
    <S.Chip {...props}>
      <S.ChipLabelContainer
        deletable={deletable}
        color={color}
        onPress={toggleDeletable}>
        <S.Label>{label}</S.Label>
      </S.ChipLabelContainer>
      {deletable && (
        <S.DeleteArea onPress={onDelete}>
          <Icon type="trash" width={14} height={14} />
        </S.DeleteArea>
      )}
    </S.Chip>
  );
};

export default memo(Chip);
