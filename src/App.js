import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase, { FirebaseContext } from "./context/firebase/Firebase";
import Login from "./components/Login/Login";
import Body from "./components/body/Body";
import "./App.css";

function App() {
    return (
        <FirebaseContext.Provider
            value={{
                firebase,
            }}
        >
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/body" component={Body} />
                </Switch>
            </Router>
        </FirebaseContext.Provider>
    );
}

export default App;
