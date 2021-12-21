import React, { useState } from "react";

const ItemCount = (props) => {
  const { min, max, stock, onAdd } = props;
  const [value, setValue] = useState(stock ? min : stock);

  const handleIncrease = () => {
    if (!stock) return false;

    if (value < max) setValue((prevValue) => prevValue + 1);
  };

  const handleDecrease = () => {
    if (value > min) setValue((prevValue) => prevValue - 1);
  };

  const handelInputChange = (e) => {
    const inputValue = parseInt(e.currentTarget.value) || min;

    if (inputValue >= min && inputValue <= max) setValue(inputValue);

    e.preventDefault();
  };

  return (
    <React.Fragment>
      <div className="text-center">
        <div className="btn-group m-4" role="group">
          <button
            type="button"
            className="btn btn-outline-secondary text-center"
            style={{ width: 40 }}
            onClick={handleDecrease}
          >
            -
          </button>
          <input
            type="text"
            className="form-control mx-1 text-center"
            value={value}
            style={{ width: 60 }}
            onChange={handelInputChange}
          />
          <button
            type="button"
            className="btn btn-outline-secondary text-center"
            onClick={handleIncrease}
            style={{ width: 40 }}
          >
            +
          </button>
        </div>
      </div>
      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => onAdd(value)}
        >
          Agregar al carrito
        </button>
      </div>
    </React.Fragment>
  );
};

export default ItemCount;
