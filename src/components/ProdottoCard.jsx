/************************** Componente Card Prodotto ****************************/


function ProdottoCard(props) {

    /* Destrutturazione oggetto props */
    const {prodotto} = props;

    /***************
        RENDERING
    ****************/ 
    return(
        <div className="card">

            {/* Immagine Prodotto */}
            <div className="container-img-prodotto">
                <figure> 
                    <img className="img-prodotto" src={prodotto.image} alt={prodotto.title}/> 
                </figure>
            </div>

            {/* Descrizione Prodotto */}
                <ul className="description-card">
                    <li className="titolo-prodotto"> {prodotto.title} </li>
                    <li> {prodotto.category} </li>
                    <li className="prezzo"> {prodotto.price} € </li>
                </ul>
        </div>
    )
}

export default ProdottoCard