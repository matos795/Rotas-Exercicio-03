import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import TextField from '../../../components/TextField';

export default function Promocao() {
    return(
        <>
            <main>
                <div className="rt-container">
                    <TextField text='Página de promoção' />
                    <div className='dflex'>
                        <Link to='/inscricao'>
                            <Button text='Quero participar' />
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}