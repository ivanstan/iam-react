import React from 'react'
import { translate, TranslateProps } from "react-polyglot"
import { UserInterface } from '../models/UserInterface'
import { RouteChildrenProps } from 'react-router-dom'
import { userDataSource } from "../services/data/UserDataSource"
import { UserEntityView } from "../components/view/UserEntityView"

export interface UserDetailsPageRouteParams {
  id: string
}

export interface UserDetailsPagePropsInterface extends TranslateProps, RouteChildrenProps<UserDetailsPageRouteParams> {

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
        const { entity } = this.state
        const { t } = this.props

        return (
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>{t('User')}</h1>
                <UserEntityView entity={entity} />
              </div>
            </div>
          </div>
        )
    }
}

export default translate()(UserDetailsPage)
