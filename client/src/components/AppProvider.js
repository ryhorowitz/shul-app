import React, { useState } from 'react';
import AppContext from './AppContext';

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [shuls, setShuls] = useState([])

  // You can add any user-related functions here to update the user state

  return (
    <AppContext.Provider value={{ user, setUser, shuls, setShuls }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;