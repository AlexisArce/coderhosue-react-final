import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBCY_kQBErjBibnBI2jOr1iZwrwXJSACqk",
  authDomain: "coderhouse-react-c02a9.firebaseapp.com",
  projectId: "coderhouse-react-c02a9",
  storageBucket: "coderhouse-react-c02a9.appspot.com",
  messagingSenderId: "627505114039",
  appId: "1:627505114039:web:a4095c91c2e37f03d85632",
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
  return app;
};
