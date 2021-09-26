import React from "react";
import Svg, { Circle, Text } from "react-native-svg";
import { WHITE } from "../styles/colors";

const SvgCircle = ({ title, backgroundColor }) => {
  const width = 100;
  const height = 100;
  const size = width < height ? width - 32 : height - 16;
  const strokeWidth = 25;
  const radius = (size - strokeWidth) / 2;
  const circunference = radius * 2 * Math.PI;
  return (
    <Svg width={width} height={size} viewBox="0 0 100 100">
      <Circle
        fill={backgroundColor}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeDasharray={`${circunference} ${circunference}`}
      />
      <Text
        stroke={WHITE}
        fontSize="20"
        x={size / 2}
        y={size / 1.75}
        textAnchor="middle"
        fill={WHITE}
      >
        {title}
      </Text>
    </Svg>
  );
};

export default SvgCircle;
