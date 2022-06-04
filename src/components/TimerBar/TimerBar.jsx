import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  timerIncr,
  timerReset,
  toggleTimer,
} from '../../redux/slices/timerSlice';
import './TimerBar.scss';

export default function TimerBar({ setDefeatModal, victoryModal }) {
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.timer.value);
  const max = useSelector((state) => state.timer.max);
  const start = useSelector((state) => state.timer.start);

  useEffect(() => {
    if (timer < max && start) {
      const interval = setInterval(() => {
        dispatch(timerIncr());
      }, 1000);
      return () => clearInterval(interval);
    }
    if (timer === max) {
      setDefeatModal('active');
      dispatch(timerReset());
      dispatch(toggleTimer());
    }
    if (victoryModal === 'active') {
      dispatch(timerReset());
      dispatch(toggleTimer());
    }
    return null;
  }, [timer, max, dispatch, start, setDefeatModal, victoryModal]);

  return (
    <div className="timer-container">
      <div className="timer">
        <progress value={timer} max={max} />
      </div>
    </div>
  );
}

TimerBar.propTypes = {
  setDefeatModal: PropTypes.func.isRequired,
  victoryModal: PropTypes.string.isRequired,
};
