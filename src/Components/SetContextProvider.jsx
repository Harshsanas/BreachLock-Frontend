import React, { useState } from "react";

const StoreContext = React.createContext();
console.log(StoreContext); //provider ,consumer

const StoreContextProvider = ({ children }) => {
  let cardList = JSON.parse(localStorage.getItem("cards"));
  let val;
  if (cardList != null) {
    val = cardList;
  } else {
    val = [];
  }
  const [cards, setCards] = useState(val);

  const value = { cards, setCards };

  return (
    <StoreContext.Provider value={value}> {children}</StoreContext.Provider>
  );
};

export { StoreContext, StoreContextProvider };
