import './style.scss';

export const Button = ({ text, type, outline, customClass }) => (
  <div className='custom'>
    <button
      type={type}
      className={`btn text-uppercase custom__button${
        outline ? '--outline' : ''
      } ${customClass} `}
    >
      {text}
    </button>
  </div>
);
