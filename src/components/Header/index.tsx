import { Link, NavLink } from 'react-router-dom';
import './styles.css'

export default function Header() {
    return(
        <header>
            <nav className='rt-container'>
                <div className='rt-nav-items'>
                    <Link to='/'>
                        <h2>MeuSite</h2>
                    </Link>

                    <div className='rt-nav-items-right'>
                        <NavLink 
                        className={({ isActive }) => isActive ? 'rt-navlink-active' : 'rt-navlink-non-active'}
                        to='/home'>
                            <p>Início</p>                    
                        </NavLink>
                        <NavLink 
                        className={({ isActive }) => isActive ? 'rt-navlink-active' : 'rt-navlink-non-active'}
                        to='/promocao'>
                            <p>Promoção</p>
                        </NavLink>
                        <NavLink 
                        className={({ isActive }) => isActive ? 'rt-navlink-active' : 'rt-navlink-non-active'}
                        to='/inscricao'>
                            <p>Participar</p>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    );
}