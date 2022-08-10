import { useState, createContext, useEffect, useCallback } from 'react';

const AuthContext = createContext({
  API_KEY: '',
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

let logoutTimer;

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

const retrievStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  const storedExpirationDate = localStorage.getItem('expirationTime');

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 60000) {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    return null;
  }

  return { token: storedToken, duration: remainingTime };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrievStoredToken();
  let initialToken;

  if (tokenData) {
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const loginHandler = (token, expirationTime) => {
    const remainingTime = calculateRemainingTime(expirationTime);

    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', expirationTime);

    setToken(token);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    API_KEY: props.API_KEY,
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
