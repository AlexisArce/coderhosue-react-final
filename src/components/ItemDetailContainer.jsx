import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ItemDetail from "./ItemDetail";
import Spinner from "./Spinner";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setItem(response.data);
    });
  }, [id]);

  return (
    <div className="container fluid my-4">
      {item ? <ItemDetail item={item} /> : <Spinner />}
    </div>
  );
};

export default ItemDetailContainer;
