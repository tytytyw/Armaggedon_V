import React from 'react'
import { HashRouter, Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const linkClick = (e) => {
        document.querySelector('.header__link.header__link_active').classList.remove('header__link_active')
        e.target.classList.add('header__link_active')
    }
    return (
        <HashRouter>
            <header className='header'>
                <div className='header__text-wrap'>
                    <h1 className="header__title">
                        <Link className="header__title-link" to='/'>ARMAGGEDON V</Link>
                    </h1>
                    <h2 className="header__subtitle">Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</h2>
                </div>
                <nav onClick={linkClick} className="header__nav">
                    <Link className="header__link header__link_active" to='/'>Астероиды</Link>
                    <Link className="header__link" to='/destroy'>Уничтожение</Link>
                </nav>
            </header>
        </HashRouter>
    )
}

export default Header
