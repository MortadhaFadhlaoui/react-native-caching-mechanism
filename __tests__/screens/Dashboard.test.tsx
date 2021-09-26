import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { User } from "../../src/models/User";
import { getData, storeData } from "../../src/shared/DeviceStorage";
import { hoursWithinDates } from "../../src/shared/GlobalService";
import renderer from "react-test-renderer";
import Dashboard from "../../src/screens/Dashboard";

const users: User[] = [
  {
    key: 1,
    name: "Alex",
    age: 20,
  },
  {
    key: 2,
    name: "Peter",
    age: 25,
  },
  {
    key: 3,
    name: "Frank",
    age: 22,
  },
];

const date = new Date("2021-09-26T20:00:00.134Z");
const currentDate = new Date();

beforeEach(() => {
  AsyncStorage.clear();
});

describe("Dashboard", () => {
  test("should return cached users list", async () => {
    await storeData(users, "users");
    await storeData(date, "date");

    const cachedUsers = await getData("users");
    const cachedDate = await getData("date");
    expect(AsyncStorage.getItem).toBeCalledWith("users");
    expect(AsyncStorage.getItem).toBeCalledWith("date");

    expect(hoursWithinDates(currentDate, cachedDate)).toBeGreaterThan(1);
    expect(cachedUsers).toEqual(users);
  });
});
