import styles from "../../styles/Blob.module.css";

export default function Blob() {
  return (
    <>
      <svg
        className={styles.blob}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={styles.svg}
          fill="#6f2dbd"
          d="M37,-51.5C52,-40.1,70.9,-34.6,79.3,-22.5C87.7,-10.4,85.5,8.3,77,22.1C68.5,35.9,53.7,44.8,39.9,49.2C26,53.7,13,53.7,-0.2,53.9C-13.3,54.2,-26.7,54.6,-36.8,49C-46.9,43.3,-53.8,31.5,-59.4,18.3C-65.1,5.2,-69.4,-9.4,-67,-23.4C-64.7,-37.3,-55.6,-50.7,-43.3,-63.1C-31.1,-75.4,-15.5,-86.6,-2.3,-83.5C11,-80.4,22,-63,37,-51.5Z"
          transform="translate(100 100)"
        />
      </svg>
    </>
  );
}
