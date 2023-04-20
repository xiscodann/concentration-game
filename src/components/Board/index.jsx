import React, { useEffect, useState } from 'react';
import './style.scss';
import { gridSize } from '../../helpers';
import Score from '../Score';
import Congrats from '../Congrats';
import Card from '../Card';

const REMOVE_LAST_INDEX_FROM_ID = /[-]\d+$/;

export const Board = ({ list, scoreToWin }) => {
  const [idCardSelected, setIdCardSelected] = useState([]);
  const [attempts, setAttempts] = useState({
    hits: [],
    failed: 0,
  });

  const selectCard = (id) => {
    setIdCardSelected([...idCardSelected, id]);
  };

  useEffect(() => {
    if (idCardSelected.length >= 2) {
      const isSameAnimal = idCardSelected.reduce(
        (acc, curr) =>
          curr?.replace(REMOVE_LAST_INDEX_FROM_ID, '') ===
          acc?.replace(REMOVE_LAST_INDEX_FROM_ID, '')
      );

      if (isSameAnimal) {
        setAttempts({
          ...attempts,
          hits: [...attempts.hits, idCardSelected[0]],
        });
      } else {
        setAttempts({ ...attempts, failed: attempts.failed + 1 });
      }
      const timeout = setTimeout(() => {
        setIdCardSelected([]);
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [idCardSelected]);

  return (
    <>
      <Score type='success' score={attempts.hits.length} />
      <div className={`board ${gridSize(scoreToWin * 2)} order-3 order-lg-2`}>
        {list.map(({ id, name, url }, index) => {
          const cardId = `${id}-${index}`;
          const isFoundPair = attempts.hits.find(
            (item) => item.replace(REMOVE_LAST_INDEX_FROM_ID, '') === id
          );
          const customCardId = idCardSelected.find((item) => item === cardId);
          const blockAllCards = idCardSelected.length >= 2;
          return (
            <Card
              key={cardId}
              isFoundPair={isFoundPair}
              customCardId={customCardId}
              blockAllCards={blockAllCards}
              id={cardId}
              name={name}
              url={url}
              selectCard={selectCard}
            />
          );
        })}
      </div>
      <Score type='failed' score={attempts.failed} />

      {attempts.hits.length === scoreToWin && <Congrats />}
    </>
  );
};
