import React from 'react';
import './style.scss';
import { Button } from '../Button';

const Error = ({ error, onClickButton }) => {
  return (
    <article className='error'>
      <div className='error__container'>
        <h1 title={error}>Oops</h1>
        <p className='mb-5'>
          Al parecer tuvimos un problema. Por favor, vuelve a intentarlo
        </p>
        <div>
          <Button
            type='button'
            text='Intentar nuevamente'
            outline={true}
            customClass={'my-1'}
            onClickButton={onClickButton}
          />
        </div>
      </div>
    </article>
  );
};

export default Error;
