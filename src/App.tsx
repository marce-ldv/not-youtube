import React              from 'react';
import './App.css';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import Firebase                           from './Settings/firebase.settings';
import LoginPage          from './Page/Login';

new Firebase();

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={createMuiTheme()}>
        <LoginPage/>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
