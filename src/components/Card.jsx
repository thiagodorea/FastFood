const Card = (props) =>{

    const { imagem , title, descricao} = props;

    return(
        <div className="card-container">
            <img src={imagem} alt={title} className="card-image" />
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{descricao}</p>
        </div>
    )
}

export default Card;