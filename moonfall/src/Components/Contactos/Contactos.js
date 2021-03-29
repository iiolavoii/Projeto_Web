import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import EmailView from "../Emails/EmailView.js";

export default function Contactos() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [apelido, setApelido] = useState("");
  const [assunto, setAssunto] = useState("");

  const [emails, setEmails] = useState([]);

  function onClickAddEmail(email, nome, apelido, assunto){
    setEmails([...emails, {email, nome, apelido, assunto}]);
    setNome("");
    setEmail("");
    setApelido("");
    setAssunto("");
  }

  /**
   * Procurei desenvolver uma forma de criar cards com o conteúdo escrito no
   * formulário. Infelizmente não tive muito exito. 
   * Apresentação do formulario através dos componentes importados do "react-bootstrap"
   */


  return (
    <div>
      <div className="header-container">
        <h1 className="header-title">Contactos</h1>
        <p class="header-subtitle">
          Pode entrar em contacto conosco por aqui ou ligando para o contacto
          abaixo
        </p>
      </div>
      <div className="contactos-container">
        <Form className="form">
          <Form.Group controlId="email">
            <Form.Label>Endereço de Email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" onChange={(ev) => setEmail(ev.target.value)}/>
          </Form.Group>
          <Form.Group controlId="nome">
            <Form.Label>Nome Próprio</Form.Label>
            <Form.Control type="name" placeholder="João"  onChange={(ev) => setNome(ev.target.value)}/>
          </Form.Group>
          <Form.Group controlId="apelido">
            <Form.Label>Apelido</Form.Label>
            <Form.Control type="apelido" placeholder="Matias" onChange={(ev) => setApelido(ev.target.value)}/>
          </Form.Group>
          <Form.Group controlId="assuntos">
            <Form.Label>Assunto</Form.Label>
            <Form.Control as="select">
              <option>Informações sobre produtos</option>
              <option>Sugestões</option>
              <option>Cometários gerais ou dúvidas</option>
              <option>Reclamações</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="TextArea">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Escreva aqui ..."
              onChange={(ev) => setAssunto(ev.target.value)}
            />
          </Form.Group>

          <Button onClick={onClickAddEmail}>Enviar e-mail</Button>
        </Form>
      </div>
      <EmailView data={emails}/>
    </div>
  );
}
