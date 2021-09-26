export class User {
  key: number;
  name: string;
  age: number;
  constructor(user?: any) {
    this.key = (user && user.key) || "";
    this.name = (user && user.name) || "";
    this.age = (user && user.age) || null;
  }
}

export interface IRow {
  key: string;
  title: string;
  subTitle: number;
}
