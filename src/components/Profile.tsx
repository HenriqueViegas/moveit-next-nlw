import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/henriqueviegas.png" alt="Henrique Viegas Profile" />
      <div>
        <strong>Henrique Viegas D Agostini</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          level {level}
        </p>
      </div>
    </div>
  );
}