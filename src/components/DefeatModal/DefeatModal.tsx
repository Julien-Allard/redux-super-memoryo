import './DefeatModal.scss';
import React from 'react';
import { FC } from 'react';

type DefeatModalProps = {
  resetGame: () => void;
  defeatModal: string;
};

const DefeatModal: FC<DefeatModalProps> = ({ resetGame, defeatModal }) => {
  const handleClick = () => {
    resetGame();
  };

  return (
    <div
      className={`defeatmodal-container ${defeatModal}`}
      data-testid="defeat-modal"
    >
      <div className="introduction">
        <div className="defeat">
          <img src="/img/game-over.png" alt="" />
        </div>
        <p className="description">Timeout !</p>
        <div
          className="button"
          onClick={handleClick}
          onKeyDown={handleClick}
          role="button"
          tabIndex={0}
        >
          <img src="/img/retry.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default DefeatModal;
