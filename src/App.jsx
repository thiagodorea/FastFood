import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Feijoda from './assets/img/feijoada.png';
import Camarao from './assets/img/camarao.png';
import CocaCola from './assets/img/coca-cola.png';
import Coxinha from './assets/img/coxinha.png';
import TortaLimao from './assets/img/torta_limao.png';

import "./styles.css";

const App = () => {
  return(
    <div className="container">
      <Header />
      <main>
        <h2 className="title"> Fast Food House</h2>
        <div className="list-container">
            <div className="list-items">
              <Card title="Feijoada" descricao="Refeição" imagem={Feijoda} />
              <Card title="Camarão" descricao="Refeição" imagem={Camarao} />
              <Card title="Coxinha" descricao="Porção" imagem={Coxinha} />
              <Card title="Torta Limao" descricao="Sobre Mesa" imagem={TortaLimao} />
              <Card title="Coca Cola" descricao="Bebida" imagem={CocaCola} />
          </div>
        </div>
      </main>
      <Footer title="Todos os Direitos Reservados." />
    </div>
  );
}
export default App;
