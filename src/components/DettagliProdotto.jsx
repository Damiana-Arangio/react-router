/************************ Componente Dettagli Prodotto ******************************/

/* import useParams per recuperare l'id dall'URL */
import {useParams} from "react-router-dom";

function DettagliProdotto() {

    const { id } = useParams(); /* Recupero l'id dall'URL */

    return (
        <div className="container-page">
            <h1> Fake Store API </h1>
            <div className="container-flex-left-right">

                {/* Immagine Prodotto */}
                <div className="container-left">
                    <figure>
                        <div>immagine prodotto</div>
                        {/* <img className="img-promozionale" src="./src/assets/img/marketing-festività.png" alt="immagine marketing" /> */}
                    </figure>
                </div>

                {/* Dettagli Prodotto */}
                <div className="container-right">
                    <h3> TITOLO PRODOTTO</h3>
                    <p className="text-promozionale"> Desccrizione prodotto con id: {id} </p>
                </div>
            </div>

        </div>
    )
}

export default DettagliProdotto