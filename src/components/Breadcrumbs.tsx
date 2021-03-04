import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Breadcrumbs as MaterialBreadcrumb, Link, StyledComponentProps, withStyles } from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { translate, TranslateProps } from "react-polyglot";

const useStyles: any = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export interface BreadcrumbsParam {
  path: string
  title: string
}

export interface BreadcrumbsPropsInterface extends TranslateProps, StyledComponentProps {
  data: BreadcrumbsParam[];
}

class Breadcrumbs extends React.Component<BreadcrumbsPropsInterface, any> {
  render() {
    const { data, t, classes } = this.props;

    return (
      <div className={classes?.root}>
        <MaterialBreadcrumb separator={<NavigateNextIcon fontSize="small"/>} aria-label="breadcrumb">
          {data.map(breadcrumb =>
            <Link color="inherit" href={breadcrumb.path}>
              {t(breadcrumb.title)}
            </Link>
          )}
        </MaterialBreadcrumb>
      </div>
    );
  }
}

export default translate()(withStyles(useStyles)(Breadcrumbs));
