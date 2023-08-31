import Image from 'next/image';
import styles from './introduction.module.scss';

import ChessSet from '/public/assets/img/chessset.png';
import Ko64 from '/public/assets/img/ko64.svg';

const Introduction = () => {
    return (
        <section className={styles.introduction}>
            <div className={styles.patternSet} /> {/*to change the background*/}
            <Image src={ChessSet} sizes='100' alt='chess set' className={styles.chessSet} />
            <Ko64 className={styles.titleLogo} />
        </section>
    )
}

export default Introduction;