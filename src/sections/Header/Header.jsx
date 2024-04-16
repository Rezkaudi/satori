'use client'

import Link from 'next/link'
import { useState } from 'react'

// styles
import Styles from './Header.module.css'

// assets
import LogoImg from '../../../public/images/logo.svg'

// components
import Burger from '@/components/Burger/Burger'
import Logo from '@/components/Logo/Logo'
import { HeaderButton } from '@/components/Buttons/Buttons'

// data
import headerData from './data.json'




const Header = () => {

  const [showMenu, setShowMenu] = useState(false)
  const handleMenu = () => {
    if (window.innerWidth <= 992) {
      setShowMenu(pre => !pre)
    }
  }

  return (
    <header className={Styles.header}>
      <div className={`container ${Styles.container}`}>

        <Logo src={LogoImg} />

        <Burger showMenu={showMenu} handleMenu={handleMenu} />

        <nav className={`${Styles.navbar} ${showMenu ? Styles.active : ""}`}>
          <ul>
            {headerData.navbarItems.map(item =>
              <li onClick={handleMenu}>
                <Link href={item.to}>{item.content}</Link>
              </li>
            )}
          </ul>

          <div className={Styles.headerButtons}>
            {headerData.headerButton.map(item =>
              <HeaderButton key={item.id} to={item.to} content={item.content} />
            )}
          </div>
        </nav>


      </div>

    </header>


  )
}

export default Header