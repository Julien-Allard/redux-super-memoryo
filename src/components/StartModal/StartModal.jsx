import './StartModal.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleTimer } from '../../redux/slices/timerSlice';

const StartModal = ({ startModal, setStartModal }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    setStartModal('');
    dispatch(toggleTimer());
  };

  return (
    <div
      className={`startmodal-container ${startModal}`}
      data-testid="start-modal"
    >
      <div className="introduction">
        <div className="welcome">
          <img src="/img/welcome.png" alt="" />
        </div>
        <p className="description">The Mario themed memory game</p>
        <div className="rules">
          <p>
            Usual rules : 16 cards, you need to find the 8 pairs before time
            runs out !
          </p>
          <p>Time limit : 2 minutes</p>
        </div>
        <div
          className="button"
          onClick={handleClick}
          onKeyDown={handleClick}
          role="button"
          tabIndex={0}
        >
          <img src="/img/lets-a-go.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default StartModal;

// StartModal.propTypes = {
//   startModal: PropTypes.string,
//   setStartModal: PropTypes.func,
// };

// StartModal.defaultProps = {
//   startModal: 'active',
//   setStartModal: undefined,
// };
