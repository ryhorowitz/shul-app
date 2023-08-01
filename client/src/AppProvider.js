import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [shuls, setShuls] = useState([])

  // You can add any user-related functions here to update the user state
  //put useEffect for shuls data
  useEffect(() => {
    fetch('/shuls')
      .then(res => {
        if (res.ok) {
          // console.log('app provider shul useEffect')
          res.json().then(shuls => setShuls(shuls))
        }
      })
      .catch(e => console.error('error is', e))
  }, [user])

  return (
    <AppContext.Provider value={{ user, setUser, shuls, setShuls }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;