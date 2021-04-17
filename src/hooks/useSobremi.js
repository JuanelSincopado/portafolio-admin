import { useEffect, useState } from "react";
import firebase from "../context/firebase/Firebase";

function useSobremi() {
    const [texto, setTexto] = useState({
        texto: "",
    });

    useEffect(() => {
        firebase.db.collection("sobremi").onSnapshot(manejarSnapshot);

        function manejarSnapshot(snapshot) {
            const texto = snapshot.docs[0].data();

            setTexto(texto);
        };
    });

    return texto;
}

export default useSobremi;