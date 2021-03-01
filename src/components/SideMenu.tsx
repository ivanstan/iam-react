import { Divider, List, ListItem, ListItemIcon, ListItemText, withStyles } from "@material-ui/core";
import React from "react";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { translate } from "react-polyglot";

const useStyles: any = (theme: any) => ({
  list: {
    minWidth: 300,
  },
  link: {
    "&:hover": {
      color: theme.palette.text.primary,
      textDecoration: "none"
    }
  }
});

class SideMenu extends React.Component<any, any> {
  render() {
    const { t, classes } = this.props;

    return (
      <>
        <List className={classes.list}>
          <ListItem button className={classes.link} component="a" href="#/users">
            <ListItemIcon>
              <InboxIcon/>
            </ListItemIcon>
            <ListItemText primary={t('Users')}/>
          </ListItem>

          <ListItem button className={classes.link} component="a" href="#/applications">
            <ListItemIcon>
              <InboxIcon/>
            </ListItemIcon>
            <ListItemText primary={t('Applications')}/>
          </ListItem>

          <ListItem button className={classes.link} component="a" href="#/claims">
            <ListItemIcon>
              <InboxIcon/>
            </ListItemIcon>
            <ListItemText primary={t('Claims')}/>
          </ListItem>
        </List>
        <Divider/>
      </>
    );
  }
}

export default translate()(withStyles(useStyles)(SideMenu));
