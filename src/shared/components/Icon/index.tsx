import React, {memo, FC} from 'react';

import TrashIcon from '../../assets/icons/trash.svg';
import MenuIcon from '../../assets/icons/menu.svg';
import SearchIcon from '../../assets/icons/search.svg';

export type IconType = 'trash' | 'menu' | 'search';

interface Props {
  type: IconType;
  width?: number;
  height?: number;
  fill?: string;
}

const Icon: FC<Props> = props => {
  const {type} = props;

  const mapTypeToIcon = {
    trash: TrashIcon,
    menu: MenuIcon,
    search: SearchIcon,
  };

  const Factory = mapTypeToIcon[type];

  return <Factory {...props} />;
};

export default memo(Icon);
