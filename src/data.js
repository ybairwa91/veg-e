import React from "react";
import Vegies from "./vegies";


const vegData = [
  {
    name: "Bhindi",
    ingredients: "Bhindi with mirchi",
    price: 20,
    photoName: "images/bhindi.jpg",
    soldOut: false,
  },
  {
    name: "brinjal",
    ingredients: "brinjal mix aloo",
    price: 25,
    photoName: "images/brinjal.jpg",
    soldOut: false,
  },
  {
    name: "Carrot",
    ingredients: "aloo matar,and masala",
    price: 12,
    photoName: "images/carrot.jpg",
    soldOut: false,
  },
  {
    name: "gobi",
    ingredients: "Tomato, onion,palak",
    price: 30,
    photoName: "images/gobi.jpg",
    soldOut: false,
  },
  {
    name: "onion",
    ingredients: "Tomato,aloo, pepperoni",
    price: 15,
    photoName: "images/onion.jpg",
    soldOut: true,
  },
  {
    name: "potato",
    ingredients: "Tomato, cheese",
    price: 18,
    photoName: "images/potato.jpg",
    soldOut: false,
  },
];
export default function Data() {
  return (
    <div className="vegs">
      {vegData.map((element) => (
        <Vegies vegObj={element} />
      ))}
    </div>
  );
}


