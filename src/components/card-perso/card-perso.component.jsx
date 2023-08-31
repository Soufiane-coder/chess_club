'use client'
import styles from './card-perso.module.scss';
import Image from 'next/image';

const CardPerso = ({ side = 'left', label = '', imgSrc = '' }) => {
    return (

        <div className={[styles.personneWrapper, side === 'left' ? styles.leftPersonneWrapper : styles.rightPersonneWrapper].join(' ')}>
            <div className={[styles.circle, side === 'left' ? styles.leftCircle : styles.rightCircle].join(' ')}>
                <Image src={imgSrc} className={styles.img} width='180' height='180' alt={label} />
                <div className={[styles.description, side === 'left' ? styles.leftDescription : styles.rightDescription].join(' ')}>
                    <h4>
                        {label}
                    </h4>
                </div>
            </div>
        </div>

    )
}

export default CardPerso;