import React, {FunctionComponent} from 'react';
import navbarOrganismTemplate     from '../Template/NavbarOrganismTemplate';
import {
  AppBar, Button, IconButton, InputBase, Toolbar, Typography
}                                 from '@material-ui/core';
import MenuIcon                   from '@material-ui/icons/Menu';
import SearchIcon                 from '@material-ui/icons/Search';

interface OwnProps {
}

type Props = OwnProps;

const Navbar: FunctionComponent<Props> = () => {
  const {root, title, search, searchIcon, inputRoot, inputInput} = navbarOrganismTemplate();

  return (
    <AppBar position="static" className={root}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" className={title}>
          Not Youtube
        </Typography>
        <div className={search}>
          <div className={searchIcon}>
            <SearchIcon/>
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: inputRoot,
              input: inputInput,
            }}
            inputProps={{'aria-label': 'search'}}
          />
        </div>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
