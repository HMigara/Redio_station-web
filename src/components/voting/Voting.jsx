import React from 'react'
import styles from "./voting.module.css";

const Voting = () => {
  return (
    <>
      <div className={styles.songs}>
        <div className={styles.song}>
          <h2 className={styles.name}>Nuba haa hamu vee</h2>
          <a href="" className={styles.votebutton}>
            Vote
          </a>
        </div>
        <div className={styles.song}>
          <h2>Dawasak evi apith</h2>
          <a href="" className={styles.votebutton}>
            Vote
          </a>
        </div>
        <div className={styles.song}>
          <h2>MUdukkuwen eliyata</h2>
          <a href="" className={styles.votebutton}>
            Vote
          </a>
        </div>
        <div className={styles.song}>
          <h2>Oba dutu e mul dine</h2>
          <a href="" className={styles.votebutton}>
            Vote
          </a>
        </div>
        <div className={styles.song}>
          <h2>Mal mitak thiyanna</h2>
          <a href="" className={styles.votebutton}>
            Vote
          </a>
        </div>
      </div>
      {/* <div className={styles.results} id="results-container">
        <h2>Current Results:</h2>
        <ul id="results-list"></ul>
      </div> */}
    </>
  );
}

export default Voting