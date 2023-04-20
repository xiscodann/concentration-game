import { useContext, useEffect, useState } from 'react';
import './style.scss';
import { StateContext } from '../../base/context';
import { Button } from '../Button';

const Congrats = () => {
  const [renderCongrats, setRenderCongrats] = useState(false);
  const { stateGame, setStateGame } = useContext(StateContext);
  const { initialCards: cards, userName } = stateGame;

  const handlerLevelDificult = (numberOfCards) => {
    if (numberOfCards === 'retry') {
      setStateGame({ ...stateGame, retryFlag: !stateGame.retryFlag });
    } else {
      setStateGame({ ...stateGame, initialCards: numberOfCards });
    }
  };

  useEffect(() => {
    const timeoutCongrats = setTimeout(() => {
      setRenderCongrats(true);
    }, 1000);
    return () => {
      clearTimeout(timeoutCongrats);
    };
  }, []);

  if (renderCongrats) {
    return (
      <div className='congrats'>
        <div className='container congrats__container'>
          <img
            className='congrats__container--check'
            src='/src/assets/icon-check.svg'
          />
          <h1>Excelente, {userName?.split(' ')[0]}</h1>
          <p className='mb-5'>
            Parece que dominas este nivel, ¿qué tal si cambias de dificultad?
          </p>
          <div>
            {cards !== 4 && (
              <Button
                type='button'
                text='Fácil'
                onClickButton={() => handlerLevelDificult(4)}
                customClass={'my-1 w-100'}
              />
            )}
            {cards !== 12 && (
              <Button
                type='button'
                text='Intermedio'
                onClickButton={() => handlerLevelDificult(12)}
                customClass={'my-1 w-100'}
              />
            )}
            {cards !== 16 && (
              <Button
                type='button'
                text='Difícil'
                onClickButton={() => handlerLevelDificult(16)}
                customClass={'my-1 w-100'}
              />
            )}
            <Button
              type='button'
              text='Volver a jugar'
              outline={true}
              onClickButton={() => handlerLevelDificult('retry')}
              customClass={'my-1 w-100'}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Congrats;
