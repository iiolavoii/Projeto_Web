import React from "react";
import { Jumbotron, Button } from "reactstrap";

/**
 * 
 * Aqui há simplesmente a importação dos componentes do "reactstrap"
 * e a sua configuração
 */

export default function Jumbos() {
  return (
    <div className="jumbotron-container">
      <Jumbotron className="jumbotron-item-all">
        <div className="jumbotron-item">
          <h1>Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-2" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </div>
        <img
          className="image-responsive"
          src="/img/Processador/processador1.jpg"
          alt="processador1"
        />
      </Jumbotron>
      <Jumbotron className="jumbotron-item-all">
        <img
          src="/img/Placagrafica/video1.jpg"
          alt="video1"
          className="image-responsive"
        />
        <div className="jumbotron-item">
          <h1>Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-2" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </div>
      </Jumbotron>
      <Jumbotron className="jumbotron-item-all">
        <div className="jumbotron-item jumbotron-left">
          <h1>Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-2" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </div>
        <img
          src="/img/Torres/torre1.jpg"
          alt="torre1"
          className="image-responsive"
        />
      </Jumbotron>
    </div>
  );
}
