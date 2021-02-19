import { AbstractDataSource } from "../AbstractDataSource";

export class UserDataSource extends AbstractDataSource {

    public async get(id: string|number) {
      this.request();
    }

}

export const userDataSource = new UserDataSource();
