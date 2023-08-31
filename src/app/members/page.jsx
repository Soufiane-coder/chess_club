
import styles from './members.module.scss';
import CardPerso from '@/components/card-perso/card-perso.component';

import FatimaBenttaj from '@/img/members/fatima-bentaj.png';
import YassirAbidy from '@/img/members/yassir-abidy.jpg';
import ImaneWeldchennan from '@/img/members/imane-weldchennan.png';
import HibaBiban from '@/img/members/hiba-biban.jpg';
import DouaeElhayel from '@/img/members/douae-elhayel.jpg';
import AbderrahimMabrouk from '@/img/members/abderrahim-mabrouk.png';
import SoufianeAmimi from '@/img/members/soufiane-amimi.png';



export const metadata = {
    title: 'Members',
    description: 'This is the chess club web site of the university Ecole Normale Supérieur de rabat',
}

const personnes = [
    {
        label: 'Président',
        imgSrc: SoufianeAmimi,
    },
    {
        label: 'R.communication',
        imgSrc: FatimaBenttaj,
    },
    {
        label: 'Secrétaire générale',
        imgSrc: DouaeElhayel,
    },
    {
        label: 'V.R.communication',
        imgSrc: HibaBiban,
    },
    {
        label: 'Coach',
        imgSrc: AbderrahimMabrouk,
    },
    {
        label: 'Trésorière',
        imgSrc: ImaneWeldchennan,
    },
    {
        label: 'Designer',
        imgSrc: YassirAbidy,
    }
]


const Page = () => {
    return (
        <>
            <h2 className={styles.years}>2022-2023</h2>
            <div className={styles.wrapper}>
                {
                    personnes.map((personne, index) => <CardPerso side={index % 2 ? 'left' : 'right'} {...personne} />)
                }
            </div>
        </>
    )
}

export default Page;