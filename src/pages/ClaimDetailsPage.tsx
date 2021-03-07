import React from 'react'
import { translate, TranslateProps } from "react-polyglot"
import { ClaimInterface } from '../models/ClaimInterface'
import { RouteChildrenProps } from 'react-router-dom'
import { claimDataSource } from "../services/data/ClaimDataSource"
import ClaimEntityView from "../components/view/ClaimEntityView"

export interface ClaimDetailsPageRouteParams {
  id: string
}

export interface ClaimDetailsPagePropsInterface extends TranslateProps, RouteChildrenProps<ClaimDetailsPageRouteParams> {

}

export interface ClaimDetailsPageStateInterface {
  entity: ClaimInterface|null
}

const breadcrumbs = [
  {
    title: "Home",
    url: "#/",
  },
  {
    title: "Claims",
    url: "#/claim",
  },
  {
    title: "Claim details",
    url: "#/claim",
  }
];

export class ClaimDetailsPage extends React.Component<ClaimDetailsPagePropsInterface, ClaimDetailsPageStateInterface> {

    public readonly state: ClaimDetailsPageStateInterface = {
      entity: null,
    }

    componentDidMount() {
      const id = this.props.match?.params.id || null

      if (id) {
        claimDataSource.get(id).then(entity => this.setState({entity: entity}))
      }
    }

    render() {
        const { entity } = this.state
        const { t } = this.props

        return (
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>{t('Claim')}</h1>
                <ClaimEntityView entity={entity} />
              </div>
            </div>
          </div>
        )
    }
}

export default translate()(ClaimDetailsPage)
