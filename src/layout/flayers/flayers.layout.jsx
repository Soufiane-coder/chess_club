import styles from './flayers.module.scss';
import ChessFlayer from '../../../public/assets/img/chessclubflyer.jpg';
import Image from 'next/image';

const Flayers = () => {
    return (
        <section className={styles.flayers}>
            <Image src={ChessFlayer} sizes='200' alt='flayer' className={styles.flayerItem} />
        </section>
    )
}

export default Flayers;