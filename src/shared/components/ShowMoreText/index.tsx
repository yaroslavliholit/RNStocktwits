import React, {memo, FC} from 'react';

import useTrimText from '../../hooks/useTrimText';
import Typography from '../Typography';
import Button from '../Button';
import Icon from '../Icon';
import Spacer from '../Spacer';

interface Props {
  text: string;
}

const ShowMoreText: FC<Props> = ({text}) => {
  const {trimmedText, shouldTrimText, isTextTrimmed, handleToddleCropText} =
    useTrimText(text);

  return (
    <>
      <Typography variant={'label'}>{trimmedText}</Typography>
      {shouldTrimText && (
        <Spacer positionType={'top'} sizeType={'small'}>
          <Button variant={'default'} onPress={handleToddleCropText}>
            <Icon
              type={isTextTrimmed ? 'arrow-down' : 'arrow-up'}
              width={20}
              height={20}
              fill={'#000000'}
            />
          </Button>
        </Spacer>
      )}
    </>
  );
};

export default memo(ShowMoreText);
