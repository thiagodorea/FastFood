const Card = (props) =>{
    const { imagem , titulo, descricao} = props.dados;

    return(
        <div className="card-container">
            <img src={imagem} alt={titulo} className="card-image" />
            <h3 className="card-title">{titulo}</h3>
            <p className="card-description">{descricao}</p>
        </div>
    )
}

export default Card;