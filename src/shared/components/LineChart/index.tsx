import React, {FC, memo} from 'react';
import {Polyline, Svg} from 'react-native-svg';

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

  const points = data
    .map(element => {
      const x = (element.x / maximumXFromData) * chartWidth + padding;
      const y =
        chartHeight - (element.y / maximumYFromData) * chartHeight + padding;

      return `${x},${y}`;
    })
    .join(' ');
  // endregion

  // region ********** JSX **********
  return (
    <Svg height={height} width={width}>
      <Polyline
        points={points}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
  // endregion
};

export default memo(LineChart);
