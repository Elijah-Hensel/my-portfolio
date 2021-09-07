import styles from "../../styles/NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navSection}>
      <a href="#about" alt="About Me">
        ABOUT ME
      </a>
      <a href="#projects" alt="projects">
        PROJECTS
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.github.com/Elijah-Hensel"
        alt="github"
      >
        GITHUB
      </a>
      <a href="#contact" alt="contact">
        CONTACT
      </a>
    </nav>
  );
}
