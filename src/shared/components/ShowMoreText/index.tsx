import React, {memo, FC} from 'react';
import {useTheme} from 'styled-components';

import useTrimText from '../../hooks/useTrimText';
import Typography from '../Typography';
import Button from '../Button';
import Icon from '../Icon';
import Spacer from '../Spacer';

interface Props {
  text: string;
}

const ShowMoreText: FC<Props> = ({text}) => {
  // region ********** DATA **********
  const {
    getNumberOfLineProp,
    shouldTrimText,
    isTextTrimmed,
    handleToddleCropText,
  } = useTrimText(text);

  const {colors} = useTheme();

  const iconType = isTextTrimmed ? 'arrow-down' : 'arrow-up';
  // endregion

  // region ********** CALLBACKS **********
  return (
    <>
      <Typography {...getNumberOfLineProp()} variant={'label'}>
        {text}
      </Typography>
      {shouldTrimText && (
        <Spacer positionType={'top'} sizeType={'small'}>
          <Button variant={'default'} onPress={handleToddleCropText}>
            <Icon
              type={iconType}
              width={20}
              height={20}
              fill={colors.text.primary}
            />
          </Button>
        </Spacer>
      )}
    </>
  );
  // endregion
};

export default memo(ShowMoreText);
