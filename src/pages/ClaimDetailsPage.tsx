import React from 'react'
import { ClaimInterface } from '../models/ClaimInterface'
import { RouteChildrenProps } from 'react-router-dom'
import { claimDataSource } from "../services/data_sources/ClaimDataSource"
import { ClaimEntityView } from "../components/ClaimEntityView";

export interface ClaimDetailsPageRouteParams {
  id: string
}

export interface ClaimDetailsPagePropsInterface extends RouteChildrenProps<ClaimDetailsPageRouteParams> {

}

export interface ClaimDetailsPageStateInterface {
  entity: ClaimInterface|null
}

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
        const { entity } = this.state;

        return <ClaimEntityView entity={entity} />
    }
}
