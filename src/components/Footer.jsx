const Footer = (props) => {
    return(
        <footer>
            <p>{props.title ? props.title : "Rodapé" }</p>
            {/* <p>{props.title ||  "Rodapé" }</p> */}
        </footer>
    )}
export default Footer;