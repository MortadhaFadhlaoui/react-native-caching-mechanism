import React, { useEffect, useState } from "react";
import { DataTable } from "react-native-paper";
import { IRow } from "../models/User";
import { sortByNumber, sortByString } from "../shared/GlobalService";
import DefaultStyles from "../styles/styles";
import { ASC, DESC, SUBTITLE, TITLE } from "../utils/Constants";
import DataLoading from "./DataLoading";
import EmptyList from "./EmptyList";
import Item from "./Item";

const Table = ({
  title,
  subTitle,
  rows,
  initTitleSortDirection = null,
  initSubTitleSortDirection = null,
  sortTitle = null,
  sortSubtitle = null,
  isLoading = null,
}) => {
  const [titleSortDirection, setTitleSortDirection] = useState(
    initTitleSortDirection
  );
  const [subTitleSortDirection, setSubTitleSortDirection] = useState(
    initSubTitleSortDirection
  );

  useEffect(() => {
    sortByString(rows, TITLE, initTitleSortDirection);
  }, [initTitleSortDirection]);

  const handleSortTitle = () => {
    const sortDirection = titleSortDirection === ASC ? DESC : ASC;
    sortByString(rows, TITLE, sortDirection);
    setTitleSortDirection(sortDirection);
  };
  const handleSortSubTitle = () => {
    const sortDirection = subTitleSortDirection === ASC ? DESC : ASC;
    sortByNumber(rows, SUBTITLE, sortDirection);
    setSubTitleSortDirection(sortDirection);
  };

  return isLoading !== null && isLoading && rows.length == 0 ? (
    <DataLoading />
  ) : rows.length > 0 ? (
    <DataTable style={DefaultStyles.tableStyle}>
      <DataTable.Header>
        <DataTable.Title> </DataTable.Title>
        <DataTable.Title
          onPress={() => {
            if (sortTitle) sortTitle(titleSortDirection);
            handleSortTitle();
          }}
          sortDirection={titleSortDirection}
        >
          {title}
        </DataTable.Title>
        <DataTable.Title
          onPress={() => {
            if (sortSubtitle) sortSubtitle(subTitleSortDirection);
            handleSortSubTitle();
          }}
          sortDirection={subTitleSortDirection}
          numeric
        >
          {subTitle}
        </DataTable.Title>
      </DataTable.Header>
      {rows.map((row: IRow) => (
        <Item key={row.key} title={row.title} subtitle={row.subTitle} />
      ))}
    </DataTable>
  ) : (
    <EmptyList />
  );
};

export default Table;
