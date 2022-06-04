import './Card.scss';
import React from 'react';
import PropTypes from 'prop-types';

export default function Card({
  card,
  handleSelection,
  flipped,
  matched,
  disabled,
}) {
  const handleClick = () => {
    if (!disabled) {
      handleSelection(card);
    }
  };

  return (
    <div className="card-container">
      <div
        className={flipped ? 'flipped' : ''}
        onClick={handleClick}
        onKeyDown={handleClick}
        role="button"
        tabIndex={0}
      >
        <img
          className={`front ${matched}`}
          src={card.src}
          alt="card illustration"
        />
        <img
          className="cover"
          src="/img/Question-Block-icon.png"
          alt="card cover"
          // onClick={handleClick}
          // onKeyDown={handleClick}
        />
      </div>
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.shape.isRequired,
  handleSelection: PropTypes.func.isRequired,
  flipped: PropTypes.bool.isRequired,
  matched: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};
