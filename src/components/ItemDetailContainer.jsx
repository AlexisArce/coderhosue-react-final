import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import Spinner from "./Spinner";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const db = getFirestore();
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setItem({ id: id, ...docSnap.data() });
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className="container fluid my-4">
      {item ? <ItemDetail item={item} /> : <Spinner />}
    </div>
  );
};

export default ItemDetailContainer;
