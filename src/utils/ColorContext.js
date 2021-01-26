import React, {createContext, useState} from 'react';

const color = {
    code: '#36F2B9',
    theme: 'dark'
};

export const Context = createContext([color, () => {}]);

export const Provider = (props) => {
  const {children} = props;
  const currentUserProfile = useState(color);

  return (
    <Context.Provider value={currentUserProfile}>{children}</Context.Provider>
  );
};