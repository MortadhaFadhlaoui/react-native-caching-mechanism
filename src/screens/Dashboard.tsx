import React, { useEffect, useReducer, useState } from "react";
import { StyleSheet, View } from "react-native";
import { FAB } from "react-native-paper";
import { ApiClient } from "../api/User";
import Table from "../components/Table";
import { IRow, User } from "../models/User";
import { getData, storeData } from "../shared/DeviceStorage";
import { hoursWithinDates, parseUsers } from "../shared/GlobalService";
import { BLUE_SKY, WHITE } from "../styles/colors";
import DefaultStyles from "../styles/styles";
import { ASC } from "../utils/Constants";

const INITLIST = "INITLIST";
const SETLIST = "SETLIST";

interface UserState {
  rows: IRow[];
  isLoading: boolean;
}

const initialState: UserState = {
  rows: [],
  isLoading: true,
};

function reducer(state, action) {
  switch (action.type) {
    case INITLIST:
      return initialState;
    case SETLIST:
      return {
        ...state,
        rows: action.rows,
        isLoading: false,
      };
    default:
      return state;
  }
}

const Dashboard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [date, setDate] = useState<Date>();

  const fetchUsers = () => {
    dispatch({ type: INITLIST });
    setTimeout(() => {
      ApiClient.fetchUsers()
        .then((users: User[]) => {
          dispatch({ type: SETLIST, rows: parseUsers(users) });
          cacheUsers(users);
        })
        .catch((error) => {
          console.error(error);
        });
    }, 2000);
  };

  const fetchData = (date: Date = null) => {
    console.log(date);
    // fetch Data from api every hour
    if (!date || hoursWithinDates(new Date(), date) > 1) {
      fetchUsers();
      cacheDate();
    } else {
      // fetch Data from cache
      getCachedUsers();
    }
  };

  useEffect(() => {
    getData("date")
      .then((date) => {
        setDate(date);
        fetchData(date);
      })
      .catch((e) => {
        fetchData();
      });
  }, []);

  const refreshData = () => {
    fetchData(date);
  };

  // We could move that to the helpers section
  // TODO
  const cacheUsers = (users) => {
    storeData(users, "users").then(() => {
      console.log("users saved");
    });
  };

  const getCachedUsers = () => {
    getData("users").then((users) => {
      dispatch({ type: SETLIST, rows: parseUsers(users) });
    });
  };

  const cacheDate = () => {
    const currentDate = new Date();
    storeData(currentDate, "date").then(() => {
      setDate(currentDate);
    });
  };

  return (
    <View style={DefaultStyles.container}>
      <Table
        title="Name"
        subTitle="Age"
        initTitleSortDirection={ASC}
        initSubTitleSortDirection={ASC}
        rows={state.rows}
        isLoading={state.isLoading}
      />
      <FAB
        style={styles.fab}
        color={WHITE}
        icon="refresh"
        onPress={refreshData}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  fab: {
    backgroundColor: BLUE_SKY,
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 50,
  },
});

export default Dashboard;
