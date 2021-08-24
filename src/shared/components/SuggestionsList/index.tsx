import React, {memo, FC, useCallback} from 'react';
import {useTheme} from 'styled-components';

import Typography from '../Typography';
import Icon from '../Icon';
import Spacer from '../Spacer';
import * as S from './styles';

interface Props<T> {
  items: T[];
  onItemSelect?: (item: T) => void;
}

const SuggestionsList: FC<Props<SearchSuggestion>> = ({
  items,
  onItemSelect,
}) => {
  const {colors} = useTheme();

  const handleItemPress = useCallback(
    (item: SearchSuggestion) => () => {
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
        const searchSuggestion = item as SearchSuggestion;

        return (
          <S.ListItem onPress={handleItemPress(searchSuggestion)}>
            <S.ListIconContainer positionType={'left'}>
              <Icon
                type={searchSuggestion.sourceType}
                fill={colors.text.primary}
                width={15}
                height={15}
              />
            </S.ListIconContainer>
            <S.ListLabelContainer>
              <Spacer positionType={'right'} sizeType={'small'}>
                <Typography variant={'important'}>
                  {searchSuggestion.title}
                </Typography>
              </Spacer>
              <Typography variant={'label'} numberOfLines={1}>
                {searchSuggestion.subtitle}
              </Typography>
            </S.ListLabelContainer>
            <S.ListIconContainer positionType={'right'}>
              <Icon
                type={'arrow-right'}
                fill={colors.text.primary}
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
