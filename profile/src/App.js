import React from 'react';
import Profile from './profile/profile.js';
import './App.css';
import ME from '../src/profile/img/me.jpg'

function App() {
  return (
    <Profile  fullName="Oumayma Ben Jemâa" profession="Seeking for a job" bio="Licence diplome in IOT and embedded systems">
    <img src={ME} />
    </Profile>
  );
}

export default App;
