import React, {memo, FC} from 'react';

import TrashIcon from '../../assets/icons/trash.svg';
import MenuIcon from '../../assets/icons/menu.svg';
import SearchIcon from '../../assets/icons/search.svg';
import LeftArrowIcon from '../../assets/icons/left-arrow.svg';
import RightArrowIcon from '../../assets/icons/right-arrow.svg';
import UpArrowIcon from '../../assets/icons/up-arrow.svg';
import DownArrowIcon from '../../assets/icons/down-arrow.svg';

export type IconType =
  | 'trash'
  | 'menu'
  | 'search'
  | 'arrow-right'
  | 'arrow-up'
  | 'arrow-down'
  | 'arrow-left';

interface Props {
  type: IconType;
  width?: number;
  height?: number;
  fill?: string;
}

const mapTypeToIcon = {
  trash: TrashIcon,
  menu: MenuIcon,
  search: SearchIcon,
  ['arrow-right']: RightArrowIcon,
  ['arrow-up']: UpArrowIcon,
  ['arrow-down']: DownArrowIcon,
  ['arrow-left']: LeftArrowIcon,
};

const Icon: FC<Props> = props => {
  const {type} = props;

  const Factory = mapTypeToIcon[type];

  return <Factory {...props} />;
};

export default memo(Icon);
