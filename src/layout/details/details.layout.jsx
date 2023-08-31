import styles from './details.module.scss';

const Details = () => {
    return (
        <div className={styles.details}>
            <div className={styles.description}>
                <p className={styles.paragraph}>
                    Notre club d'échecs, (King Of 64) CHESS CLUB at ENSR, est ouvert à tous ceux qui sont passionnés par ce jeu stratégique et qui souhaitent améliorer leurs compétences. Nous accueillons des joueurs de tous niveaux, du débutant au joueur expérimenté. Rejoignez-nous et venez partager votre passion pour les échecs avec nous !
                </p>
            </div>
        </div>
    )
}

export default Details;