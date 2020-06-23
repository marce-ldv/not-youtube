import React     from 'react';
import './App.css';
import Firebase  from './Settings/firebase.settings';
import LoginPage from './Page/Login';
import Home      from './Page/Home';

new Firebase();

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
