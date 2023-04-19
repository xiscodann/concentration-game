import { useState } from 'react';
import './styles/app.scss';
import { StateContext } from './base/context';
import HomeUserName from './containers/HomeUserName';
import { readStorage } from './helpers';

const App = () => {
  const { userName } = readStorage() || false;
  const [isUserNameExist, setIsUserNameExist] = useState(userName);

  return (
    <StateContext.Provider value={{ isUserNameExist, setIsUserNameExist }}>
      {isUserNameExist ? <p>Hola, {userName}</p> : <HomeUserName />}
    </StateContext.Provider>
  );
};

export default App;
