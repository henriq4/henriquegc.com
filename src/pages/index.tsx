import Head from 'next/head';

import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Henrique GC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>News comming soon...</h1>
      </main>
    </div>
  );
}

export default Home;
