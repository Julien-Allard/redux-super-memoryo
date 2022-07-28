import './Card.scss';
import React, { FC } from 'react';

type CardObj = {
  src: string;
  isMatched: boolean;
};

type CardProps = {
  card: CardObj;
  handleSelection: (card: CardObj) => void;
  flipped: boolean;
  matched: string;
  disabled: boolean;
};

const Card: FC<CardProps> = ({
  card,
  handleSelection,
  flipped,
  matched,
  disabled,
}) => {
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
          data-testid="card-image"
        />
        <img
          className="cover"
          src="/img/Question-Block-icon.png"
          alt="card cover"
        />
      </div>
    </div>
  );
};

export default Card;
