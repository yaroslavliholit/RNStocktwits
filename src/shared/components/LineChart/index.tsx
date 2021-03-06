import React, {FC, memo, useMemo} from 'react';
import {Polyline} from 'react-native-svg';

import * as S from './styles';

interface Vector {
  x: number;
  y: number;
}

interface Props {
  data: Vector[];
  width: number;
  height: number;
  strokeColor?: string;
  strokeWidth?: string | number;
}

const LineChart: FC<Props> = ({
  data,
  width,
  height,
  strokeColor = '#000000',
  strokeWidth = 3,
}) => {
  // region ********** DATA **********
  const FONT_SIZE = width / 100;
  const precision = 0;

  const maximumXFromData = Math.max(...data.map(({x}) => x));
  const maximumYFromData = Math.max(...data.map(({y}) => y));

  const digits =
    parseFloat(maximumYFromData.toString()).toFixed(precision).length + 1;

  const padding = FONT_SIZE + digits;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const points = useMemo(
    () =>
      data
        .map(el => {
          const x = (el.x / maximumXFromData) * chartWidth + padding;
          const y =
            chartHeight - (el.y / maximumYFromData) * chartHeight + padding;

          return `${x},${y}`;
        })
        .join(' '),
    [
      chartHeight,
      chartWidth,
      data,
      maximumXFromData,
      maximumYFromData,
      padding,
    ],
  );
  // endregion

  // region ********** JSX **********
  return (
    <S.SvgContainer height={height} width={width}>
      <Polyline
        points={points}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
    </S.SvgContainer>
  );
  // endregion
};

export default memo(LineChart);
