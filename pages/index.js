import Head from "next/head";
import Image from "next/image";
import NavBar from "../public/components/NavBar";
import Blob from "../public/components/Blob";
import Skills from "../public/components/Skills";
import ContactForm from "../public/components/ContactForm";
import styles from "../styles/Home.module.css";

export default function Home() {
  console.log(styles);
  return (
    <div className={styles.container}>
      <Head>
        <title>Elijah Hensel:// Web Developer</title>
        <meta
          name="description"
          content="Elijah Hensel Web Developer Portfolio Site"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.header}>
          <NavBar />
          <h1 className={styles.title}>
            Elijah Hensel://{" "}
            <text className={styles.titleSecondary}>Web Developer</text>
          </h1>
          <Skills />
        </section>
        <section id="about" className={styles.primarySection}>
          <div className={styles.about}>
            <h3>Artist Manager turned Web Developer</h3>
            <p className={styles.blurb}>
              For the last 8 years I have been an artist manager for an
              international touring heavy metal band. During this, I have
              devoted my time to mastering the online presence of musicians and
              artists through web-design and marketing strategies. After
              attending the Louisiana State University x FullStack University
              Web-Dev Bootcamp, I mastered the skills I had been self-teaching.
              Web design, from front-end UI/UX to databasing and backend, has
              become my primary interest. There is nothing I love more than
              taking scratch code and turning it into something useable,
              visually appealing, and user-friendly.
            </p>
          </div>
        </section>
        <section className={styles.projectSkillsWrapper}>
          <div id="projects" className={styles.grid}>
            <Blob />
            <h2 className={styles.projectHeader}>PROJECTS</h2>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://used-egg.herokuapp.com"
              className={styles.card}
            >
              <h2>UsedEgg. &rarr;</h2>
              <p>E-commerce site with fully functioning backend &amp; API</p>
            </a>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://eem-linkerator.herokuapp.com/"
              className={styles.card}
            >
              <h2>Linkerator &rarr;</h2>
              <p>Fullstack bookmarking webapp with a popularity counter</p>
            </a>
          </div>
        </section>
        <ContactForm />
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
