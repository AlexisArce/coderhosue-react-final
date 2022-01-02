import React, { useState, useEffect } from "react";
//import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Spinner from "./Spinner";
import { collection, getFirestore, getDocs, query } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  //const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = query(
      collection(db, "products")
      //where("category", "=", category)
    );
    getDocs(queryCollection)
      .then((resp) => {
        console.log(resp);
        setItems(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container fluid my-4">
      {items && items.length ? <ItemList items={items} /> : <Spinner />}
    </div>
  );
};

export default ItemListContainer;
