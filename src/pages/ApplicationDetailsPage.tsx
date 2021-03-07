import React from 'react'
import { translate, TranslateProps } from "react-polyglot"
import { ApplicationInterface } from '../models/ApplicationInterface'
import { RouteChildrenProps } from 'react-router-dom'
import { applicationDataSource } from "../services/data/ApplicationDataSource"
import ApplicationEntityView from "../components/view/ApplicationEntityView"

export interface ApplicationDetailsPageRouteParams {
  id: string
}

export interface ApplicationDetailsPagePropsInterface extends TranslateProps, RouteChildrenProps<ApplicationDetailsPageRouteParams> {

}

export interface ApplicationDetailsPageStateInterface {
  entity: ApplicationInterface|null
}

const breadcrumbs = [
  {
    title: "Home",
    url: "#/",
  },
  {
    title: "Applications",
    url: "#/application",
  },
  {
    title: "Application details",
    url: "#/application",
  }
];

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
        const { entity } = this.state
        const { t } = this.props

        return (
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>{t('Application')}</h1>
                <ApplicationEntityView entity={entity} />
              </div>
            </div>
          </div>
        )
    }
}

export default translate()(ApplicationDetailsPage)
