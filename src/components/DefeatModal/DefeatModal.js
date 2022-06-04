import "./DefeatModal.scss";
import React from "react";
import PropTypes from "prop-types";

export default function DefeatModal({ resetGame, defeatModal }) {
  const handleClick = () => {
    resetGame();
  };

  return (
    <div className={`defeatmodal-container ${defeatModal}`}>
      <div className="introduction">
        <div className="defeat">
          <img src="/img/game-over.png" alt="" />
        </div>
        <p className="description">Timeout !</p>
        <div className="button" onClick={handleClick}>
          <img src="/img/retry.png" alt="" />
        </div>
      </div>
    </div>
  );
}

DefeatModal.propTypes = {
  resetGame: PropTypes.function.isRequired,
  defeatModal: PropTypes.string.isRequired,
};
