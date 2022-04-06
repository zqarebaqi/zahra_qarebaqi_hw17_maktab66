import React from "react";
import { useEffect, useState, useContext } from "react";
import { Context } from "../context/context";

const Allitems = () => {
  const [country, setcountry] = useState([]);
  const { setState } = useContext(Context);

  useEffect(() => {
    let fetchRes = fetch("https://61f6bc6d2e1d7e0017fd6f2c.mockapi.io/country");
    fetchRes
      .then((res) => res.json())
      .then((d) => {
        setcountry(d);
      });
  }, []);

  const oncheckboxchanged = (e, id) => {
    const statecopy = [...country];
    const find = statecopy.find((item) => item.id === id);
    find.check = e.target.checked;
    const checkedcountry = statecopy.filter((item) => item.check);
    setState(checkedcountry);
    setcountry(statecopy);
  };

  return (
    <div className="allitems">
      <h3>All items</h3>

      {country.map((item) => (
        <div key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.check}
              onChange={(e) => oncheckboxchanged(e, item.id)}
            />
            {item.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Allitems;
