/************************ Componente Dettagli Prodotto ******************************/

import { useState, useEffect } from "react"         // import useEffect e useState per recuperare il singolo oggetto dall'API e salvarlo nella variabile di stato "prodotto"
import { useParams } from "react-router-dom";       // import useParams per recuperare l'id dall'URL

function DettagliProdotto() {

    /***********
        HOOK
    ***********/ 

    /* Hook di Parametro */
    const { id } = useParams();                                              // Recupero l'id dall'URL

    /* Hook di Stato */
    const [prodottoIsEmpty, setProdottoIsEmpty] = useState(true);               // Flag di stato per tenere traccia se i dati sono stati caricati dall'API 
    const [singoloProdotto, setsingoloProdotto] = useState(prodottoIsEmpty);    // Variabile di stato contentente un singolo prodotto (in base all'id corrente) ritornato dall'API

    /* DEBUG */
    console.log("INIZIO");
    console.log("Singolo prodotto: ", singoloProdotto)
    console.log("flag: ", prodottoIsEmpty)

    /* Hook di Effetto */
    useEffect(() => {
        fetchSingoloProdotto();                                             //Chiamata Api al montaggio del componente

        /* DEBUG */
        console.log("MONTAGGIO");
        console.log("Singolo prodotto: ", singoloProdotto)
        console.log("flag: ", prodottoIsEmpty)
    }, []);
    
    return (
        <div className="container-page">
            <h1> Fake Store API </h1>

            {/* Se l'API non ha risposto -> prodottoIsEmpty === true */}
            { prodottoIsEmpty ? (
                <p> Loading </p>
            ) 
            
            /* Se l'API ha risposto -> prodottoIsEmpty === false */
            : (

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
            )
                
            
            }

        </div>
    )

    /***************
        FUNZIONI
    ***************/

    /* Richiesta API per ottenere il prodotto con id corrente recuperato da URL*/
    function fetchSingoloProdotto() {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((risSingoloProdotto) => {


                // Simula ritardo di 2 secondi (2000 ms)
                setTimeout(() => {
                    setsingoloProdotto(risSingoloProdotto.data);
                    setProdottoIsEmpty(false);
                }, 2000);

                /* DEBUG */
                console.log("DENTRO .THEN");
                console.log("Singolo prodotto: ", singoloProdotto)
                console.log("flag: ", prodottoIsEmpty)
            })
            .catch((err) => {

                /* DEBUG */
                console.log("DENTRO .CATCH");
                console.log("Singolo prodotto: ", singoloProdotto)
                console.log("flag: ", prodottoIsEmpty)
                console.log(err);
            });
    }
}

export default DettagliProdotto