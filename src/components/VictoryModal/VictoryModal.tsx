import './VictoryModal.scss';
import React, { FC } from 'react';
import { useAppSelector } from '../../redux/hooks';

type VictoryModalProps = {
  victoryModal: string;
  resetGame: () => void;
};

const VictoryModal: FC<VictoryModalProps> = ({ victoryModal, resetGame }) => {
  const turns = useAppSelector((state) => state.turns.turn);

  const handleClick = () => {
    resetGame();
    const record = localStorage.getItem('bestscore');
    if (record) {
      if (turns < Number(record) && Number(record) !== 0) {
        localStorage.setItem('bestscore', turns.toString());
      }
    } else {
      localStorage.setItem('bestscore', turns.toString());
    }
  };

  return (
    <div className={`victorymodal-container ${victoryModal}`}>
      <div className="introduction">
        <div className="congratulations">
          <img src="/img/congratulations.png" alt="" />
        </div>
        <p className="description">You&apos;ve won !</p>
        <div className="text">
          <p>But it looks like the princess is in another castle...</p>
        </div>
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

export default VictoryModal;
