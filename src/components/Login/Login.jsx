import React, { useEffect, useState } from "react";
import firebase from "../../context/firebase/Firebase";
import useAutenticacion from "../../hooks/useAutenticacion";
import "./Login.css";

const Login = (props) => {
    const [campos, setCampos] = useState({
        correo: "",
        password: "",
    });
    const [error, setError] = useState("");
    
    const usuario = useAutenticacion();

    useEffect(() => {
        if (usuario) {
            props.history.push("/body");
        }
    }, [usuario]) // eslint-disable-line


    const handleOnChange = (e) => {
        setCampos({
            ...campos,
            [e.target.name]: e.target.value,
        });
    };

    const submit = async (e) => {
        e.preventDefault();

        if (campos.correo.trim() === "" || campos.password.trim() === "") {
            setError("Los campos son obligatorios");
            setTimeout(() => {
                setError("");
            }, 2000);
            return;
        }

        try {
            const usuario = await firebase.login(campos.correo, campos.password);
            console.log(usuario);
            props.history.push("/body");
        } catch (error) {
            console.log(error.message);
            setError(error.message);
            setTimeout(() => {
                setError("")
            }, 2000);
            return;
        }
    };

    return (
        <div className="login__contenedor">
            <form className="login__form" onSubmit={submit}>
                <h1 className="login__titulo">Portafolio Admin</h1>
                {error && <p className="login__error">{error}</p>}

                <div className="login__grupo">
                    <input
                        type="email"
                        className="login__input"
                        placeholder="Correo gmail"
                        name="correo"
                        value={campos.correo}
                        onChange={handleOnChange}
                    />
                </div>
                <div className="login__grupo">
                    <input
                        type="password"
                        className="login__input"
                        placeholder="Cédula"
                        name="password"
                        value={campos.password}
                        onChange={handleOnChange}
                    />
                </div>
                <input type="submit" className="login__submit" />
            </form>
        </div>
    );
};

export default Login;
