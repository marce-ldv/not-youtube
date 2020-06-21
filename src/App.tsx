import React     from 'react';
import './App.css';
import Firebase  from './Settings/firebase.settings';
import LoginPage from './Page/Login';

const f = new Firebase();

function App() {
  return (
    <div className="App">
      <LoginPage/>
    </div>
  );
}

export default App;
