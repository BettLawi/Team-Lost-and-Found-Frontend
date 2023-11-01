import { createContext, useState, useContext } from 'react';


const AccessTokenContext = createContext(null);

export const AccessTokenProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);

  return (
    <AccessTokenContext.Provider value={{ accessToken, setAccessToken }}>
      
    </AccessTokenContext.Provider>
  );
};

export const useAccessToken = () => {
  const context = useContext(AccessTokenContext);
  if (!context) {
    throw new Error('useAccessToken must be used within an AccessTokenProvider');
  }
  return context;
};
