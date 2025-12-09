import { Link } from 'react-router-dom';
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
                        <Link to='/'>
                            <p>Início</p>                    
                        </Link>
                        <Link to='/promocao'>
                            <p>Promoção</p>
                        </Link>
                        <Link to='inscricao'>
                            <p>Participar</p>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}