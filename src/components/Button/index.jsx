import './style.scss';

export const Button = ({ text, type, outline, customClass, onClickButton }) => (
  <div className='custom'>
    <button
      type={type}
      className={`btn text-uppercase custom__button${
        outline ? '--outline' : ''
      } ${customClass} `}
      onClick={() => onClickButton && onClickButton()}
    >
      {text}
    </button>
  </div>
);
