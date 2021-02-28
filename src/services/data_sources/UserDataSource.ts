import { AbstractDataSource } from "../AbstractDataSource"
import UserInterface from '../../models/UserInterface'

const url = 'https://iam.ivanstanojevic.me'

export class UserDataSource extends AbstractDataSource {

  public async get(id: string|number): Promise<UserInterface|null> {
    const response = await fetch(this.baseUrl + '/api/entity/user/' + id)

    return await response.json()
  }

}

export const userDataSource = new UserDataSource(url)
