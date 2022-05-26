import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  updateMatch,
  resetCards,
  increaseMatched,
} from "../redux/slices/cardsSlice";
import "./MemoryGame.scss";
import Card from "../components/Card/Card";
import TimerBar from "../components/TimerBar/TimerBar";
import StartModal from "../components/StartModal/StartModal";
import VictoryModal from "../components/VictoryModal/VictoryModal";
import DefeatModal from "../components/DefeatModal/DefeatModal";

export default function MemoryGame() {
  const [firstPick, setFirstPick] = useState(null);
  const [secondPick, setSecondPick] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const [startModal, setStartModal] = useState("active");
  const [victoryModal, setVictoryModal] = useState("");
  const [defeatModal, setDefeatModal] = useState("");

  const [turns, setTurns] = useState(0);
  const [matchNumber, setMatchNumber] = useState(0);

  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.deck);
  const matchedCards = useSelector((state) => state.cards.matchedCards);

  const handleSelection = (card) => {
    firstPick ? setSecondPick(card) : setFirstPick(card);
  };

  const reset = () => {
    setFirstPick(null);
    setSecondPick(null);
    setDisabled(false);
    // setTurns((turns) => turns + 1);
  };

  const resetGame = () => {
    setVictoryModal("");
    setDefeatModal("");
    setMatchNumber(0);
    setDisabled(false);
    setTurns(0);
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
  }, [firstPick, secondPick, dispatch]);

  useEffect(() => {
    if (matchNumber === 16) {
      setVictoryModal("active");
      // setTimerBar(false);
    }
  }, [matchNumber, cards]);

  return (
    <div className="memory-game-container">
      <div className="title">
        <img src="/img/title.png" alt="" />
      </div>
      <div className="cards-container">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleSelection={handleSelection}
            flipped={
              card === firstPick || card === secondPick || card.isMatched
            }
            matched={card.isMatched === true ? "matched" : ""}
            disabled={disabled}
          />
        ))}
      </div>

      <TimerBar
        setDefeatModal={setDefeatModal}
        // victoryModal={victoryModal}
      />
      <StartModal startModal={startModal} setStartModal={setStartModal} />
      <VictoryModal
        victoryModal={victoryModal}
        resetGame={resetGame}
        turns={turns}
      />
      <DefeatModal
        defeatModal={defeatModal}
        // resetGame={resetGame}
      />
    </div>
  );
}
