/************************ Componente Dettagli Prodotto ******************************/

/* import useParams per recuperare l'id dall'URL */
import {useParams} from "react-router-dom";

function DettagliProdotto() {

    const { id } = useParams();

    return (
        <div> l'ID è: {id} </div>
    )
}

export default DettagliProdotto