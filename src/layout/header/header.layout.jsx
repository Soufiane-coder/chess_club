import Image from "next/image";
import styles from './header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <Image src={'/assets/img/chess-club-logo.png'} width={400} height={400} alt='chess club logo' className="logo" />
            {/* <form action="#" className="search">
        <input type="text" className="search__input" placeholder='Search hotels' />
        <button className="search__button">
          // <svg className="search__icon">
            <use href={Icons + "#icon-magnifying-glass"}
            ></use>
          // </svg>
        </button>
      </form>
      <div className="user-nav">
        <div className="user-nav__icon-box">
          // <svg className="user-nav__icon">
            // <use xlinkHref={Icons + '#icon-bookmark'}></use>
          // </svg>
          <span className="user-nav__notification">7</span>
        </div>
        <div className="user-nav__icon-box">
          // <svg className="user-nav__icon">
            // <use xlinkHref={Icons + '#icon-chat'}></use>
          // </svg>
          <span className="user-nav__notification">13</span>
        </div>
        <div className="user-nav__user">
          <img src={require("../img/user.jpg")} alt="user" className="user-nav__user-photo" />
          <span className="user-nav__user-name">Jonas</span>
        </div>
      </div> */}
        </header>
    )
}

export default Header;