import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import React from "react";
import { SwipeableDrawer } from "@material-ui/core";
import SideMenu from "./SideMenu";

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

    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.toggleSideMenu(true)}>
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6">
              IAM
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

export default Navigation
