import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import * as api from './api';

import './App.css';

function App() {
  const [user,setUser] = useState(null)

  function fetchApi(userId){
    const user = api.getUserById('123').
    then(user => setUser(user)).catch(err => {

    })
    setUser(user)
  }

  useEffect(() => {
    fetchApi()  
  });
  return <h1>Hola</h1>;
}

export default App;
