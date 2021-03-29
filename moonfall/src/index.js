import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./Style.css";

//Importamos o CSS que aplicaremos no UI e
// a App para que do ficheiro JSX, ele crie
// um ficheiro reconhecivel ao DOM

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
