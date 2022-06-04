import './VictoryModal.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function VictoryModal({ victoryModal, resetGame }) {
  const turns = useSelector((state) => state.turns.turn);

  const handleClick = () => {
    resetGame();
    const record = localStorage.getItem('bestscore');
    if (record) {
      if (turns < record && record !== 0) {
        localStorage.setItem('bestscore', turns);
      }
    } else {
      localStorage.setItem('bestscore', turns);
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
}

VictoryModal.propTypes = {
  victoryModal: PropTypes.string.isRequired,
  resetGame: PropTypes.func.isRequired,
};
