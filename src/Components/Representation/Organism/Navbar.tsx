import React, { FunctionComponent } from 'react';
import {makeStyles}                 from '@material-ui/styles';
import navbarOrganismTemplate                   from '../Template/NavbarOrganismTemplate';
import {
  AppBar, Button, IconButton, InputBase, Toolbar, Typography
} from '@material-ui/core';
import MenuIcon                                 from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

interface OwnProps {}

type Props = OwnProps;

const useStyles = makeStyles(navbarOrganismTemplate);

const Navbar: FunctionComponent<Props> = (props) => {
  const { root, title, search, searchIcon, inputRoot, inputInput } = useStyles();

  return (
    <div className={root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={title}>
            News
          </Typography>
          <div className={search}>
            <div className={searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: inputRoot,
                input: inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
