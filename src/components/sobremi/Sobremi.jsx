import React, { useContext, useState } from "react";
import { FirebaseContext } from "../../context/firebase/Firebase";
import useSobremi from "../../hooks/useSobremi";
import "./Sobremi.css";

const Sobremi = () => {
   
    const [mensaje, setMensaje] = useState("");
    const [formulario, setFormulario] = useState({
        texto: ''
    })
    const { firebase } = useContext(FirebaseContext);

    useSobremi();
    
    const handleOnChange = e => {
        setFormulario({
            texto: e.target.value
        })

        console.log(formulario.texto);
    }

    const submit = async (e) => {
        e.preventDefault();

        if (formulario.texto === "") {
            setMensaje("Llene el campo")
            setTimeout(() => {
                setMensaje("")
            }, 2000);
            return;
        }

        const referencia = firebase.db.collection('sobremi').doc('RwBY6E7NupH3kNmU8KZ5');
        await referencia.update(formulario);

        setFormulario({
            texto: ''
        })
        setMensaje("Exitoso")

        setTimeout(() => {
            setMensaje("")
        }, 2000);
    }

    return (
        <div className="sobremi__contenedor">
            {mensaje && (<p className="sobremi__mensaje">{mensaje}</p>)}
            <h2 className="sobremi__titulo">Sobre Mi</h2>
            <p className="sobremi__texto">{useSobremi().texto}</p>
            <form className="sobremi__formulario" onSubmit={submit}>
                <input type="text" className="sobremi__input" value={formulario.texto} onChange={handleOnChange} />
                <input type="submit" className="sobremi__boton" value="Guardar" />
            </form>
        </div>
    );
};

export default Sobremi;
