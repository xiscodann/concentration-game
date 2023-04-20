import { useContext, useEffect, useState } from 'react';
import './style.scss';
import { StateContext } from '../../base/context';
import { useFetchCards } from '../../hooks/useFetchCards';
import { deleteStorage } from '../../helpers';
import { Button } from '../../components/Button';
import { Board } from '../../components/Board';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const ConcentrationGame = () => {
  const { stateGame, setStateGame } = useContext(StateContext);
  const { userName, initialCards, retryFlag } = stateGame;
  const { getAnimals, loading, error } = useFetchCards(stateGame.initialCards);
  const [listOfCards, setListOfCards] = useState([]);

  useEffect(() => {
    getAnimals().then((data) => {
      if (data) {
        const purifyAnimalList = data?.entries.map(({ fields }) => {
          return {
            id: fields.image.uuid,
            name: fields.image.title,
            url: fields.image.url,
          };
        });
        const duplicateAnimalList = [...purifyAnimalList].concat(
          purifyAnimalList
        );
        const drawList = duplicateAnimalList.sort(
          (a, b) => 0.5 - Math.random()
        );
        setListOfCards(drawList);
      }
    });
  }, [initialCards, retryFlag]);

  if (error)
    return (
      <Error
        error={error}
        onClickButton={() =>
          setStateGame({ ...stateGame, retryFlag: !retryFlag })
        }
      />
    );

  return (
    <article className='game d-flex align-items-center justify-content-center flex-column'>
      {!loading ? (
        <>
          <section className='container'>
            <p className='m-0 game__presentation--title pb-4'>
              Hola, {userName}
            </p>
            <div className='game__presentation--storage'>
              <Button
                text={`No soy ${userName?.split(' ')[0]}`}
                type='button'
                outline={true}
                onClickButton={() => deleteStorage()}
                customClass={'btn-sm'}
              />
            </div>
          </section>
          <section className='game__board container d-flex align-items-center justify-content-around'>
            <Board list={listOfCards} scoreToWin={stateGame.initialCards / 2} />
          </section>
        </>
      ) : (
        <Loading />
      )}
    </article>
  );
};

export default ConcentrationGame;
