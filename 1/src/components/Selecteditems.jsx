import React from "react";
import { useContext } from "react";
import { Context } from "../context/context";
import Listitem from "./listitem";

const Selecteditems = () => {
  const { state } = useContext(Context);
  return (
    <div className="Selecteditems">
      <h3>Selected items</h3>
      {state.map((item) => (
        <Listitem key={item.id} name={item.name} />
      ))}
    </div>
  );
};

export default Selecteditems;
