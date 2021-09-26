import { User } from "../models/User";
import { ASC, DESC, LETTERSFORRANDOMCOLOR } from "../utils/Constants";

export const getRandomColor = () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += LETTERSFORRANDOMCOLOR[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const sortByDirection = (array: any[], sortDirection: string = null) => {
  switch (sortDirection) {
    case ASC:
      return array;
    case DESC:
      return array.reverse();
    default:
      return array;
  }
};
export const sortByString = (
  array: any[],
  property: string,
  sortDirection: string = null
) => {
  array.sort((a, b) => {
    let fa = a[property].toLowerCase(),
      fb = b[property].toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });
  sortByDirection(array, sortDirection);
};

export const sortByNumber = (
  array: any[],
  property: string,
  sortDirection: string = null
) => {
  array.sort((a, b) => {
    return a[property] - b[property];
  });
  sortByDirection(array, sortDirection);
};

export const parseUsers = (users: User[]) => {
  return users.map((user: User) => ({
    key: user.key.toString(),
    title: user.name,
    subTitle: user.age,
  }));
};

export const hoursWithinDates = (date1, date2) => {
  return Math.abs(new Date(date1).getTime() - new Date(date2).getTime()) / 36e5;
};
