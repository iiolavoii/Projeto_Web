import React from "react";
import Jumbo from "../Jumbotron/Jumbotron.js";
import { CarouselApresentation } from "../Carousel/Carousel.js";

/**
 * Aqui usei um boa pratica de dividir o codigo em pequenas partes,
 * logo, esta função "HomePage" serve apenas como container do codigo a apresetar.
 * Para isso temos sempre que importar o que sera colocado, ou seja o 
 * "CarouselApresentation" e o "Jumbo"
 */

export default function HomePage() {
  return (
    <div>
      <CarouselApresentation />
      <Jumbo />
    </div>
  );
}
