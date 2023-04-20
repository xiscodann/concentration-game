import { useEffect, useState } from 'react';
import './styles/app.scss';
import { StateContext } from './base/context';
import HomeUserName from './containers/HomeUserName';
import { readStorage } from './helpers';
import ConcentrationGame from './containers/ConcentrationGame';

const App = () => {
  const { userName } = readStorage() || false;
  const [stateGame, setStateGame] = useState({
    userName: '',
    initialCards: 12,
    retryFlag: false,
  });

  useEffect(() => {
    if (userName) setStateGame({ ...stateGame, userName });
  }, [userName]);

  return (
    <StateContext.Provider value={{ stateGame, setStateGame }}>
      {stateGame.userName ? <ConcentrationGame /> : <HomeUserName />}
    </StateContext.Provider>
  );
};

export default App;
