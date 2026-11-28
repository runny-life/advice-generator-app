import styles from './AdviceCard.module.css';
import dividerMobile from '@/assets/images/pattern-divider-mobile.svg';
import dividerDesktop from '@/assets/images/pattern-divider-desktop.svg';
import DiceButton from '@/components/DiceButton/DiceButton.jsx';

function AdviceCard({ id, text, handleClick, disabled }) {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <h1 className={styles.title}>advice #{id}</h1>
        <p>"{text}"</p>
      </div>
      <picture>
        <source srcSet={dividerDesktop} media="(min-width: 768px)" />
        <img src={dividerMobile} alt="" />
      </picture>
      <DiceButton onClick={handleClick} disabled={disabled} />
    </article>
  );
}

export default AdviceCard;
