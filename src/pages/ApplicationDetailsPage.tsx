import React from 'react'
import { ApplicationInterface } from '../models/ApplicationInterface'
import { RouteChildrenProps } from 'react-router-dom'
import { applicationDataSource } from "../services/data_sources/ApplicationDataSource"
import { ApplicationEntityView } from "../components/ApplicationEntityView";

export interface ApplicationDetailsPageRouteParams {
  id: string
}

export interface ApplicationDetailsPagePropsInterface extends RouteChildrenProps<ApplicationDetailsPageRouteParams> {

}

export interface ApplicationDetailsPageStateInterface {
  entity: ApplicationInterface|null
}

export class ApplicationDetailsPage extends React.Component<ApplicationDetailsPagePropsInterface, ApplicationDetailsPageStateInterface> {

    public readonly state: ApplicationDetailsPageStateInterface = {
      entity: null,
    }

    componentDidMount() {
      const id = this.props.match?.params.id || null

      if (id) {
        applicationDataSource.get(id).then(entity => this.setState({entity: entity}))
      }
    }

    render() {
        const { entity } = this.state;

        return <ApplicationEntityView entity={entity} />
    }
}
