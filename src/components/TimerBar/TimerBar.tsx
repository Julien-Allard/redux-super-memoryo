// eslint-disable-next-line
import React, { useEffect, FC, Dispatch, SetStateAction } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  timerIncr,
  timerReset,
  toggleTimer,
} from '../../redux/slices/timerSlice';
import './TimerBar.scss';

type TimerBarProps = {
  setDefeatModal: Dispatch<SetStateAction<string>>;
};

const TimerBar: FC<TimerBarProps> = ({ setDefeatModal }) => {
  const dispatch = useAppDispatch();
  const timer = useAppSelector((state) => state.timer.value);
  const max = useAppSelector((state) => state.timer.max);
  const start = useAppSelector((state) => state.timer.start);

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
    return undefined;
  }, [timer, max, dispatch, start, setDefeatModal]);

  return (
    <div className="timer-container" data-testid="timer-bar">
      <div className="timer">
        <progress value={timer} max={max} />
      </div>
    </div>
  );
};

export default TimerBar;
