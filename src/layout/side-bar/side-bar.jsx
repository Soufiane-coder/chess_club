'use client';

import HomeIcon from '../../../public/assets/icons/home_icon.svg';
import GalleryIcon from '../../../public/assets/icons/gallery_icon.svg';
import RobotIcon from '../../../public/assets/icons/robot_icon.svg';
import MemebersIcon from '../../../public/assets/icons/members_icon.svg';
import './side-bar.style.scss';

import Link from 'next/link';

import { usePathname } from 'next/navigation';


const SideBar = () => {
    const pathname = usePathname()

    return (
        <nav className='sidebar'>
            <ul className="side-nav">
                <label className={`side-nav__item ${pathname === '/' ? 'side-nav__item--active' : ''}`}>
                    <Link href="/" className="side-nav__link">
                        <HomeIcon className='side-nav__icon' />
                        <span>Home</span>
                    </Link>
                </label>
                <li className={`side-nav__item ${pathname === '/gallery' ? 'side-nav__item--active' : ''}`}>
                    <Link href="/gallery" className="side-nav__link">
                        <GalleryIcon className='side-nav__icon' />
                        <span>Gallery</span>
                    </Link>
                </li>
                <li className={`side-nav__item ${pathname === 'members' ? 'side-nav__item--active' : ''}`}>
                    <Link href="/members" className="side-nav__link">
                        <MemebersIcon className='side-nav__icon' />
                        <span>members</span>
                    </Link>
                </li>
                <li className={`side-nav__item ${pathname === '/chess-bot' ? 'side-nav__item--active' : ''}`}>
                    <Link href="/chess-bot" className="side-nav__link">
                        <RobotIcon className='side-nav__icon' />
                        <span>Chess BOT</span>
                    </Link>
                </li>
            </ul>
            <div className="legal">
                &copy; 2023 by chess club ENSR. All rights reserved.
            </div>
        </nav>
    )
}

export default SideBar;