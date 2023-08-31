import Introduction from '@/layout/introduction/introduction.layout'
import Details from '@/layout/details/details.layout';
import Flayers from '@/layout/flayers/flayers.layout';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <Introduction />
      <Flayers />
      <Details />
    </div>
  )
}
