import React, {memo, FC, useCallback} from 'react';

import Typography from '../Typography';
import Icon from '../Icon';
import * as S from './styles';

interface Props<T> {
  items: T[];
  onItemSelect?: (item: T) => void;
}

const SuggestionsList: FC<Props<Ticker>> = ({items, onItemSelect}) => {
  const handleItemPress = useCallback(
    (item: Ticker) => () => {
      if (onItemSelect) {
        onItemSelect(item);
      }
    },
    [onItemSelect],
  );

  return (
    <S.List
      data={items}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({item}) => {
        const data = item as Ticker;

        return (
          <S.ListItem onPress={handleItemPress(data)}>
            <S.ListIconContainer>
              <Icon type={'search'} fill={'#000000'} width={15} height={15} />
            </S.ListIconContainer>
            <S.ListLabelContainer>
              <Typography variant={'label'}>{data.name}</Typography>
            </S.ListLabelContainer>
            <S.ListIconContainer>
              <Icon
                type={'arrow-right'}
                fill={'#000000'}
                width={20}
                height={20}
              />
            </S.ListIconContainer>
          </S.ListItem>
        );
      }}
    />
  );
};

export default memo(SuggestionsList);
