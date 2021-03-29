import React from "react";
import product_card from "../Data/DataCards.js";

/**
 * 
 * Importamos um json "transformado" em js, para podermos exporta-lo numa const.
 * Aqui nós temos uma apresentação de nossos produtos em cards que são mapeados
 * pelos elemntos do visuais pelos seus nomes "item.id", "item.currency".
 */


export default function Produtos() {
  const listItems = product_card.map((item) => (
    <div className="card" key={item.id}>
      <div className="card-img">
        <img src={item.thumb} alt={item.product_name} width="100%" />
      </div>
      <div className="card-header">
        <h2>{item.product_name}</h2>
        <p>{item.description}</p>
        <p className="price">
          {item.price}
          <span>{item.currency}</span>
        </p>
        <div className="btn">Add to cart</div>
      </div>
    </div>
  ));

  return (
    <div>
      <div>
        <h3 className="produto-title">Produtos</h3>
      </div>
      <div className="produto-main-container">{listItems}</div>
    </div>
  );
}
