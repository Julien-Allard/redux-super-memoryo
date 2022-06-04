import "./Card.scss";
import React from "react";
import PropTypes from "prop-types";

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

Card.propTypes = {
  card: PropTypes.object.isRequired,
  handleSelection: PropTypes.function.isrequired,
  flipped: PropTypes.boolean.isRequired,
  matched: PropTypes.string.isRequired,
  disabled: PropTypes.boolean.isRequired,
};
