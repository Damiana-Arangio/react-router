/************************** Componente Pagina Principale ****************************/


function Home() {
    return(

        <div className="container">
            {/* Testo Promozionale */}
                <h1> Benvenuto nel nostro mini e-commerce</h1>
                <p> Approfitta delle nostre offerte speciali! </p>
            
                {/* Immagine Promozionale */}
                <figure>
                    <img className="img-promozionale" src="./src/assets/img/marketing-festività.png" alt="immagine marketing" />
                </figure>
        </div>
    )
}

export default Home