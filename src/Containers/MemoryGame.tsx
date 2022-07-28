// eslint-disable-next-line
import React, { useState, useEffect, useCallback, FC } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import {
  updateMatch,
  resetCards,
  increaseMatched,
  resetMatched,
} from '../redux/slices/cardsSlice';
import { toggleTimer, timerReset } from '../redux/slices/timerSlice';
import { turnIncr, turnReset } from '../redux/slices/turnsSlice';
import './MemoryGame.scss';
import Card from '../components/Card/Card';
import TimerBar from '../components/TimerBar/TimerBar';
import StartModal from '../components/StartModal/StartModal';
import VictoryModal from '../components/VictoryModal/VictoryModal';
import DefeatModal from '../components/DefeatModal/DefeatModal';
import TurnCounter from '../components/TurnCounter/TurnCounter';

type PickState = {
  src: string;
  isMatched: boolean;
};

const MemoryGame: FC = () => {
  const [firstPick, setFirstPick] = useState<PickState | null>(null);
  const [secondPick, setSecondPick] = useState<PickState | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false);

  const [startModal, setStartModal] = useState<string>('active');
  const [victoryModal, setVictoryModal] = useState<string>('');
  const [defeatModal, setDefeatModal] = useState<string>('');

  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.cards.deck);
  const matchedCards = useAppSelector((state) => state.cards.matchedCards);

  const handleSelection = (card: PickState) => {
    // firstPick ? setSecondPick(card) : setFirstPick(card);
    if (firstPick && firstPick !== card) {
      // changed code for test "&& firstPick !== card"
      setSecondPick(card);
    } else {
      setFirstPick(card);
    }
  };

  const reset = useCallback(() => {
    setFirstPick(null);
    setSecondPick(null);
    setDisabled(false);
    dispatch(turnIncr());
  }, [dispatch]);

  const resetGame = () => {
    setFirstPick(null);
    setSecondPick(null);
    setVictoryModal('');
    setDefeatModal('');
    dispatch(resetMatched());
    dispatch(resetCards());
    setDisabled(false);
    dispatch(turnReset());
    dispatch(toggleTimer());
  };

  useEffect(() => {
    if (firstPick && secondPick) {
      setDisabled(true);
      if (firstPick.src === secondPick.src) {
        dispatch(updateMatch(firstPick.src));
        dispatch(increaseMatched());
      }
      setTimeout(() => reset(), 1000);
    }
  }, [firstPick, secondPick, dispatch, reset]);

  useEffect(() => {
    if (matchedCards === 16) {
      setVictoryModal('active');
      dispatch(timerReset());
      dispatch(toggleTimer());
    }
  }, [matchedCards, cards, dispatch]);

  return (
    <div className="memory-game-container">
      <div className="title">
        <img src="/img/title.png" alt="" />
      </div>
      <TurnCounter />
      <div className="cards-container">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleSelection={handleSelection}
            flipped={
              card === firstPick || card === secondPick || card.isMatched
            }
            matched={card.isMatched === true ? 'matched' : ''}
            disabled={disabled}
          />
        ))}
      </div>
      <TimerBar setDefeatModal={setDefeatModal} />
      <StartModal startModal={startModal} setStartModal={setStartModal} />
      <VictoryModal victoryModal={victoryModal} resetGame={resetGame} />
      <DefeatModal defeatModal={defeatModal} resetGame={resetGame} />
    </div>
  );
};

export default MemoryGame;
