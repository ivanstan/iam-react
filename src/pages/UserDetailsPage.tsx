import React from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import { userDataSource } from "../services/data_sources/UserDataSource";

interface UserDetailsPageRouteParams {
  id: string;
}

interface UserDetailsPagePropsInterface extends RouteChildrenProps<UserDetailsPageRouteParams> {

}

interface UserDetailsPageStateInterface {

}

export class UserDetailsPage extends React.Component<UserDetailsPagePropsInterface, UserDetailsPageStateInterface> {

  public readonly state: UserDetailsPageStateInterface = {};

  constructor(props: UserDetailsPagePropsInterface) {
    super(props);

    const id = props.match?.params.id || null;

    if (id) {
      userDataSource.get(id).then();
    }
  }

  render() {
    return '';
  }
}
