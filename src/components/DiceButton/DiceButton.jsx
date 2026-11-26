import diceIcon from '@/assets/images/icon-dice.svg';

function DiceButton({ onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label="Get a new piece of advice"
    >
      <img src={diceIcon} alt="" />
    </button>
  );
}

export default DiceButton;
