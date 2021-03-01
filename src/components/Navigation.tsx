import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import React from "react";
import { SwipeableDrawer, withStyles } from "@material-ui/core";
import SideMenu from "./SideMenu";
import { translate } from "react-polyglot";

const useStyles: any = (theme: any) => ({});

class Navigation extends React.Component<any, any> {

  public readonly state = {
    sideMenuOpen: false,
  };

  toggleSideMenu = (open: boolean) => (event: any) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    this.setState({ sideMenuOpen: open });
  };

  render() {
    const { sideMenuOpen } = this.state;
    const { t } = this.props;

    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.toggleSideMenu(true)}>
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6">
              {t('IAM')}
            </Typography>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          anchor={'left'}
          open={sideMenuOpen}
          onClose={this.toggleSideMenu(false)}
          onOpen={this.toggleSideMenu(true)}
        >
          <div
            className={'left'}
            role="presentation"
            onClick={this.toggleSideMenu(false)}
            onKeyDown={this.toggleSideMenu(false)}
          >
            <SideMenu/>
          </div>
        </SwipeableDrawer>
      </>
    );
  }
}

export default translate()(withStyles(useStyles)(Navigation));
