import { useRef, useContext } from 'react';
import './style.scss';
import { StateContext } from '../../base/context';
import { saveStorage } from '../../helpers';
import { Button } from '../../components/Button';

const HomeUserName = () => {
  const nameValue = useRef();
  const { setIsUserNameExist } = useContext(StateContext);

  const handlerOnSubmitForm = (e) => {
    e.preventDefault();
    const userName = nameValue.current.value;
    saveStorage({ userName });
    setIsUserNameExist(true);
  };

  return (
    <article className='name'>
      <section className='name__container container d-flex align-items-center justify-content-center flex-column'>
        <div className='name__logo'>
          <img
            src={'src/assets/cards-presentation.png'}
            alt='Concentrese logo game'
          />
        </div>
        <form className='name__form' onSubmit={handlerOnSubmitForm}>
          <h1 className='name__form--title'>Concentrese</h1>
          <p className='name__form--subtitle'>Escribe tu nombre para jugar</p>
          <input
            type='text'
            className='form-control name__form--input'
            placeholder='Tu nombre'
            ref={nameValue}
            maxLength={25}
            minLength={3}
            required
          />
          <Button
            text={'Jugar'}
            type={'submit'}
            outline={false}
            customClass='my-4'
          />
        </form>
      </section>
    </article>
  );
};

export default HomeUserName;
