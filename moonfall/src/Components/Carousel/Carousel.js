import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";


/**
 * Importamos e configuramos o "Carousel" de forma a funcionar como quisermos.
 * Utilizamos a hook "useState" criar duas variaveis. Temos um bolean e temos 
 * "int". Quando clicamos no "CarouselControl" Depertamos o evento "onExiting"
 *  do "CarouselItem" que por sua vez passa o boleano a true. Ao mesmo tempo o 
 *  o evento "onClickHandler" executa as suas respectivas funções que passam o slide
 *  para frente ou para trás com um simples ternario. Ao final da animação, desperta
 *  o "onExited" e o boleano passa a falso. Dessa forma não criamos um loop.
 */

//um array de objectos com o destino das img e outras informações. Mas a frente elas são mapeadas
//e distribuidas nos slides através do "map"
const items = [
  {
    src: "/img/blue_pc.jpg",
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: "/img/pc_red.jpg",
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: "/img/street_pc.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
  },
];

const CarouselApresentation = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        className="carousel-item"
      >
        <img src={item.src} alt={item.altText} className="image-responsive" />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div className="carousel-container">
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export { CarouselApresentation };
