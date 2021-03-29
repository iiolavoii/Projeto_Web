import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PersistentDrawerLeft from "./Components/Navbar/Navbar.js";
import HomePage from "./Components/Home/Home.js";
import Contactos from "./Components/Contactos/Contactos.js";
import Produtos from "./Components/Produtos/Produtos.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer/Footer.js";
import EmailView from "./Components/Emails/EmailView.js"


/*Quando criamos um create-react-app ele vem com uma serie de ficheiros
* já configurados. O App.js é um deles. Utilizamos o App para receber
* toda a aplicação para então ser invocada no index.js

* Em cima, importamos todo o conteudo que vamos apresentar no UI como o
* "Footer" ou "HomePage".
* Importamos o react para que assuma o que é feito como tal. Importamos
* as funcionalidades de routing do react-dom para definir o endereçamento
* sites
*/

function App() {
  return (
    <Router>
      <div>
        <PersistentDrawerLeft />
      </div>
      <div className="app-container">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/Produtos">
            <Produtos />
          </Route>
          <Route path="/Contactos">
            <Contactos />
          </Route>
          <Route path="/Emails">
            <EmailView />
          </Route>
        </Switch>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
