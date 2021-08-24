import React, {PropsWithChildren, ReactNode} from 'react';
import {TouchableOpacity} from 'react-native';

import Spacer from '../Spacer';
import Typography from '../Typography';
import {FlatList} from 'react-native';

interface Props<T> {
  items: T[];
  title?: string;
  renderListItemContent: (item: T) => ReactNode;
  onItemPress?: (item: T) => void;
}

const List = <I,>({
  items,
  title,
  renderListItemContent,
  onItemPress,
}: PropsWithChildren<Props<I>>) => {
  // region ********** CALLBACKS **********
  const handleItemPress = (item: I) => () => {
    if (onItemPress) {
      onItemPress(item);
    }
  };
  // endregion

  // region ********** JSX **********
  return (
    <>
      {Boolean(title) && (
        <Spacer positionType={['left', 'bottom']} sizeType={'large'}>
          <Typography variant={'heading'}>{title}</Typography>
        </Spacer>
      )}
      <FlatList
        data={items}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <Spacer positionType={'bottom'} sizeType={'large'}>
            <TouchableOpacity onPress={handleItemPress(item)}>
              {renderListItemContent(item)}
            </TouchableOpacity>
          </Spacer>
        )}
      />
    </>
  );
  // endregion
};

export default List;
