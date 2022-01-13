import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import Spinner from "./Spinner";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [showSpinner, setShowSpinner] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const db = getFirestore();
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setItem({ id: id, ...docSnap.data() });
      }

      setShowSpinner(false);
    }
    fetchData();
  }, [id]);

  const renderComponent = () => {
    if (showSpinner) {
      return <Spinner />;
    } else {
      return item ? (
        <ItemDetail item={item} />
      ) : (
        <h3>El producto no existe :(</h3>
      );
    }
  };

  return <div className="container fluid my-4">{renderComponent()}</div>;
};

export default ItemDetailContainer;
