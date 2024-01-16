import { useState } from "react";

import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const [componentToDisplay, setComponentToDisplay] = useState("register");

  const handleClick = () => {
    if (componentToDisplay === "register") {
      setComponentToDisplay("login");
    } else {
      setComponentToDisplay("register");
    }
  };

  const displayComponent = () => {
    if (componentToDisplay === "register") {
      return <Register />;
    } else {
      return <Login />;
    }
  };

  console.info(componentToDisplay);

  return (
    <>
      <h1>Mes composants :</h1>

      {displayComponent()}

      <button onClick={handleClick}>
        {componentToDisplay === "register"
          ? "J'ai déjà un compte"
          : "S'inscrire"}
      </button>
    </>
  );
}

export default App;
