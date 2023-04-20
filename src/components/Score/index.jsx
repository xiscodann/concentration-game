import React from 'react';
import './style.scss';

const Score = ({ type, score }) => (
  <div className={`score ${type}`}>
    <div className='score__circle'>
      <p className='m-0 score__circle--title'>{score}</p>
    </div>
    <p className='m-0 score__subtitle'>
      {type === 'success' ? 'Aciertos' : 'Fallidos'}
    </p>
  </div>
);

export default Score;
