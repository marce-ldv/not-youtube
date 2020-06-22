import React     from 'react';
import './App.css';
import Firebase  from './Settings/firebase.settings';
import LoginPage from './Page/Login';

new Firebase();

function App() {
  return (
    <div className="App">
      <LoginPage/>
    </div>
  );
}

export default App;
