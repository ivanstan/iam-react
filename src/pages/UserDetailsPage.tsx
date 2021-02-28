import React from 'react'
import UserInterface from '../models/UserInterface'
import { RouteChildrenProps } from 'react-router-dom'
import { userDataSource } from "../services/data_sources/UserDataSource"

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

    constructor(props: UserDetailsPagePropsInterface) {
        super(props)

        const id = props.match?.params.id || null

        if (id) {
            userDataSource.get(id).then(entity => this.setState({entity: entity}))
        }
    }

    render() {
        return ''
    }
}
