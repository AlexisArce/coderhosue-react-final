import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Spinner from "./Spinner";
import {
  collection,
  getFirestore,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = category
      ? query(collection(db, "products"), where("category", "==", category))
      : query(collection(db, "products"));

    getDocs(queryCollection)
      .then((resp) => {
        console.log(resp);
        setItems(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })));
      })
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <div className="container fluid my-4">
      {items ? <ItemList items={items} /> : <Spinner />}
    </div>
  );
};

export default ItemListContainer;
