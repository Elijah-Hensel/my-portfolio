import Image from "next/image";
import styles from "../../styles/Skills.module.css";

export default function Skills() {
  return (
    <div className={styles.skillContainer}>
      <div className={styles.skillWrapper}>
        <div className={styles.skill}>
          <div className={styles.jsIcon}></div>
          <p>JAVASCRIPT</p>
        </div>
        <div className={styles.skill}>
          <div className={styles.expressIcon}></div>
          <p>EXPRESS</p>
        </div>
        <div className={styles.skill}>
          <div className={styles.nodeIcon}></div>
          <p>NODE</p>
        </div>
      </div>
      <div className={styles.skillWrapper}>
        <div className={styles.skill}>
          <div className={styles.reactIcon}></div>
          <p>REACT</p>
        </div>
        <div className={styles.skill}>
          <div className={styles.postgresIcon}></div>
          <p>POSTGRESQL</p>
        </div>
        <div className={styles.skill}>
          <div className={styles.jqueryIcon}></div>
          <p>JQUERY</p>
        </div>
        {/* <div className={styles.skill}>
        <div className={styles.shopifyIcon}></div>
        <p>SHOPIFY</p>
      </div> */}
      </div>
    </div>
  );
}
