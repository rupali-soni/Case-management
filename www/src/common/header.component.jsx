import React, { Component } from 'react';
import { render } from 'react-dom';

import { AppBar, IconButton, IconMenu, MenuItem, MenuDivider } from 'react-toolbox';
import { Layout, NavDrawer, Panel } from 'react-toolbox';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';


class Header extends React.Component {
  constructor() {
    super();
    this.state = {
        drawerActive: false
    };
    this.toggleDrawerActive = this.toggleDrawerActive.bind(this);
  }

  toggleDrawerActive() {
      this.setState({ drawerActive: !this.state.drawerActive });
  };

  render() {
      return (
          <div>
            <NavDrawer active={this.state.drawerActive} pinned={this.state.drawerPinned} permanentAt='xl' onOverlayClick={ this.toggleDrawerActive }>
                <Navigation type='vertical'>
                  <MenuDivider />
                  <Link href='/#/' active label='Home' icon='home' />
                  <MenuDivider />
                  <Link href='/#/list' active label='All Cases' icon='list' />
                  <MenuDivider />
                  <Link href='/#/add' active label='Add New Case' icon='add' />
                  <MenuDivider />
                </Navigation>
              </NavDrawer>
              <AppBar leftIcon='menu' onLeftIconClick={ this.toggleDrawerActive } />
          </div>
      );
  }
}

export default Header;
