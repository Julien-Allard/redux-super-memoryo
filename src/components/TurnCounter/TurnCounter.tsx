import './TurnCounter.scss';
import React, { FC } from 'react';
import { useAppSelector } from '../../redux/hooks';

const TurnCounter: FC = () => {
  const turns = useAppSelector((state) => state.turns.turn);
  const record = localStorage.getItem('bestscore');

  return (
    <div className="turncounter-container">
      <div className="turncounter">
        <p>Turns :</p>
        <p>{turns}</p>
      </div>
      <div className="record">
        <p>Best Score :</p>
        <p>{record}</p>
      </div>
    </div>
  );
};

export default TurnCounter;
