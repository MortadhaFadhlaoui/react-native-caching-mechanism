import React from "react";
import { DataTable } from "react-native-paper";
import { getRandomColor } from "../shared/GlobalService";
import DefaultStyles from "../styles/styles";
import SvgCircle from "./SvgCircle";
const Item = ({ title, subtitle }) => {
  return (
    <DataTable.Row style={DefaultStyles.rowStyle}>
      <DataTable.Cell style={DefaultStyles.itemStyle}>
        <SvgCircle title={title.charAt(0)} backgroundColor={getRandomColor()} />
      </DataTable.Cell>
      <DataTable.Cell>{title}</DataTable.Cell>
      <DataTable.Cell numeric>{subtitle}</DataTable.Cell>
    </DataTable.Row>
  );
};

export default Item;
