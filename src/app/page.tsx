import styles from './page.module.css'
import { Article } from '@/Article'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Article />
      </div>
    </main>
  )
}
