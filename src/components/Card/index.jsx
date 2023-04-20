import React from 'react';
import './style.scss';

const Card = ({
  isFoundPair,
  id,
  selectCard,
  name,
  url,
  customCardId,
  blockAllCards,
}) => (
  <div
    className={`custom-card ${isFoundPair || customCardId ? 'isFlipped' : ''}`}
  >
    <button
      type='button'
      className={`custom-card__button `}
      disabled={isFoundPair || customCardId || blockAllCards}
      onClick={() => selectCard(id)}
    >
      <div className='custom-card__button--front'>
        <img
          src={'./src/assets/card-background-2.jpg'}
          alt={name}
          className='custom-card__button--image'
        />
      </div>
      <div className='custom-card__button--back'>
        <img src={url} alt={name} className='custom-card__button--image' />
      </div>
    </button>
  </div>
);

export default Card;
