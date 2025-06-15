import { useState } from "react";
import cssModule from "./hooks/Hooks.module.css";

const ShortCircuit = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSetUser, setUser] = useState(false);

  const setLoggedInState = (flgLogInState) => {
    if (!flgLogInState) {
      setUser(false);
    }
    setIsLoggedIn(flgLogInState);
  };

  return (
    <section className={cssModule["card"]}>
      <h1 className={cssModule["card-heading"]}>
        Welcome to the ShortCircuit Evaluation!
      </h1>

      {isLoggedIn ? <p>You are logged in!</p> : <p>Please log in</p>}

      {isLoggedIn && isSetUser ? (
        <p>Hey User,</p>
      ) : isLoggedIn ? (
        <p>You are logged in,now you can set user.</p>
      ) : (
        <p>Before set user, please log in</p>
      )}

      <div>
        <button onClick={() => setLoggedInState(!isLoggedIn)}>
          Toggle Login State
        </button>
        <button onClick={() => setUser(true)}>Set User</button>
        <button onClick={() => setUser(false)}>Clear User</button>
      </div>
    </section>
  );
};

export default ShortCircuit;
