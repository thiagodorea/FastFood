import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import dados from "./data/dados.json"
import "./styles.css";

const App = () => {
  return(
    <div className="container">
      <Header />
      <main>
        <h2 className="title"> Fast Food House</h2>
        <div className="list-container">
            <div className="list-items">
              {
              dados.map((dado) => (
                <Card key={dado.id} dados={dado} />
              ))
              }
          </div>
        </div>
      </main>
      <Footer title="Todos os Direitos Reservados." />
    </div>
  );
}
export default App;
