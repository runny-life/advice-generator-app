import styles from './AdviceCard.module.css';
import dividerMobile from '@/assets/images/pattern-divider-mobile.svg';
import dividerDesktop from '@/assets/images/pattern-divider-desktop.svg';
import DiceButton from '@/components/DiceButton/DiceButton.jsx';

function AdviceCard({ advice, loading, error, onRefresh }) {
  let title = 'advice';
  let text = 'Loading…';

  if (advice) {
    title = `advice #${advice.id}`;
    text = `“${advice.advice}”`;
  }
  if (error) {
    text = `Something went wrong (${error})`;
  }

  return (
    <article className={styles.card} aria-busy={loading}>
      <div className={styles.content} aria-live="polite">
        <h1 className={styles.title}>{title}</h1>
        <p>{text}</p>
      </div>
      <picture>
        <source srcSet={dividerDesktop} media="(min-width: 768px)" />
        <img src={dividerMobile} alt="" />
      </picture>
      <DiceButton onClick={onRefresh} disabled={loading} />
    </article>
  );
}

export default AdviceCard;
