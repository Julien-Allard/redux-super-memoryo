import "./Card.scss";

export default function Card({
  card,
  handleSelection,
  flipped,
  matched,
  disabled,
}) {
  const handleClick = () => {
    if (!disabled) {
      handleSelection(card);
    }
  };

  return (
    <div className="card-container">
      <div className={flipped ? "flipped" : ""}>
        <img
          className={`front ${matched}`}
          src={card.src}
          alt="card illustration"
        />
        <img
          className="cover"
          src="/img/Question-Block-icon.png"
          onClick={handleClick}
          alt="card cover"
        />
      </div>
    </div>
  );
}
