import React, { createContext, useState, useContext } from 'react';

// Creamos el contexto
const AppContext = createContext();

// Creamos un componente proveedor para envolver nuestra aplicación
export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

// Creamos un custom hook para acceder al contexto en nuestros componentes
export const useAppContext = () => useContext(AppContext);