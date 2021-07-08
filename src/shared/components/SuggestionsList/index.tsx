import React, {memo, FC, useCallback} from 'react';

import Typography from '../Typography';
import Icon from '../Icon';
import * as S from './styles';
import Spacer from '../Spacer';

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
            <S.ListIconContainer positionType={'left'}>
              <Icon type={'search'} fill={'#000000'} width={15} height={15} />
            </S.ListIconContainer>
            <S.ListLabelContainer>
              <Spacer positionType={'right'} sizeType={'small'}>
                <Typography variant={'important'}>{data.ticker}</Typography>
              </Spacer>
              <Typography variant={'label'} numberOfLines={1}>
                {data.name}
              </Typography>
            </S.ListLabelContainer>
            <S.ListIconContainer positionType={'right'}>
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
