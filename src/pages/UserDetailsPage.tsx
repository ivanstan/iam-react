import React from 'react'
import { UserInterface } from '../models/UserInterface'
import { RouteChildrenProps } from 'react-router-dom'
import { userDataSource } from "../services/data_sources/UserDataSource"
import { UserEntityView } from "../components/UserEntityView";

export interface UserDetailsPageRouteParams {
  id: string
}

export interface UserDetailsPagePropsInterface extends RouteChildrenProps<UserDetailsPageRouteParams> {

}

export interface UserDetailsPageStateInterface {
  entity: UserInterface|null
}

export class UserDetailsPage extends React.Component<UserDetailsPagePropsInterface, UserDetailsPageStateInterface> {

    public readonly state: UserDetailsPageStateInterface = {
      entity: null,
    }

    componentDidMount() {
      const id = this.props.match?.params.id || null

      if (id) {
        userDataSource.get(id).then(entity => this.setState({entity: entity}))
      }
    }

    render() {
        const { entity } = this.state;

        return <UserEntityView entity={entity} />
    }
}
