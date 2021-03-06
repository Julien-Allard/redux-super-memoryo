import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

export default function MemoryGame() {
  const [firstPick, setFirstPick] = useState(null);
  const [secondPick, setSecondPick] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const [startModal, setStartModal] = useState('active');
  const [victoryModal, setVictoryModal] = useState('');
  const [defeatModal, setDefeatModal] = useState('');

  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.deck);
  const matchedCards = useSelector((state) => state.cards.matchedCards);

  const handleSelection = (card) => {
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
}
