import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import TextField from "../../../components/TextField";


export default function Inscricao() {
    return(
        <>
            <main>
                <div className="rt-container">
                    <TextField text="Página de inscrição" />
                    <div className="dflex">
                        <Link to='/promocao'>
                            <Button text="Ver promoção" />
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}