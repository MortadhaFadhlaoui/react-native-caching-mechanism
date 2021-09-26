import { User } from "../models/User";

export class ApiClient {
  private static readonly users: User[] = [
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
  static async fetchUsers(): Promise<User[]> {
    return Promise.resolve(ApiClient.users);
  }
}
