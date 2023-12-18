import React from "react";

function Vegies({ vegObj }) {
  return (
    <li className="veg">
      <img src={vegObj.photoName} alt={vegObj.name} />

      <div>
        <h3>{vegObj.name}</h3>
        <p>{vegObj.ingredients}</p>
        <span>{vegObj.price}</span>
      </div>
    </li>
  );
}

export default Vegies;
