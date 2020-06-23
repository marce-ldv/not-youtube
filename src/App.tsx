import React                              from 'react';
import './App.css';
import Firebase                           from './Settings/firebase.settings';
import LoginPage                          from './Page/Login';
import Home                               from './Page/Home';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';

new Firebase();

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={createMuiTheme()}>
        <Home/>
        <LoginPage/>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
