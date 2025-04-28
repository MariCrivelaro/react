import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Principal() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserData() {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "usuarios", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      } else {
        navigate("/");
      }
    }

    fetchUserData();
  }, [navigate]);

  if (!userData) {
    return <p>Carregando dados...</p>;
  }

  return (
    <div>
      <h1>Bem-vindo(a)!</h1>
      <p>Nome: {userData.nome}</p>
      <p>Sobrenome: {userData.sobrenome}</p>
      <p>Data de Nascimento: {userData.dataNascimento}</p>
    </div>
  );
}
