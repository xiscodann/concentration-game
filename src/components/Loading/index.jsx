import React from 'react';
import './style.scss';

const Loading = () => {
  return (
    <div className='spinner'>
      <span className='spinner__animation'></span>
      <p className='spinner__title'>Cargando</p>
    </div>
  );
};

export default Loading;
