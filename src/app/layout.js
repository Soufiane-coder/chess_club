import './globals.scss'
import { Comic_Neue } from 'next/font/google';
import Header from '../layout/header/header.layout';
import SideBar from '../layout/side-bar/side-bar';
import styles from './layout.module.scss';


import './_components.scss';


const commicNeue = Comic_Neue({ weight: '300', subsets: ['latin'] })


export const metadata = {
  title: 'chess club',
  description: 'This is the chess club web site of the university Ecole Normale Supérieur de rabat',
  icons: {
    icon: {
      url: require('./chess-club-icon.ico').default.src,
      sizes: '32x32',
      rel: 'icon',
      type: 'image/ico',
    },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={commicNeue.className}>
        <div className={styles.container}>
          <Header />
          <div className={styles.content}>
            <SideBar />
            <main className={styles.main}>
              {children}
            </main>
          </div>
        </div></body>
    </html>
  )
}
