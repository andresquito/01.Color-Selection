import React, { useState } from "react";
import Values from "values.js";
import Photo from "../../public/andres.png";

const Form = ({ setList }) => {
  const [color, setColor] = useState("blue");
  const [error, setError] = useState(false);
  const one = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
    }
    console.log(color);
  };
  return (
    <div className="form-color">
      <div className="perfil">
        <h1>Color Selection</h1>
        <img src={Photo} alt="Photo of Andrés" />
        <h4>Andrés Yépez</h4>
      </div>
      <form onSubmit={one}>
        <input
          type="text"
          placeholder="#fff"
          onChange={(e) => setColor(e.target.value)}
        />
        <input type="Submit" value="Send" />
      </form>
      {error ? <p className="error">This color does not exist</p> : null}
    </div>
  );
};

export default Form;
