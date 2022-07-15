import React from "react";
import "./App.css";
import { AuthGoogleContext } from "./contexts/AuthGoogle";

import { AuthGoogle } from "./contexts/AuthGoogle";

const App = () => {
  const { signWithGoogle } = React.useContext(AuthGoogleContext);
  return (
    <AuthGoogle>
      <div className="App">
        <header className="App-header">
          <button className="App-link" onClick={() => signWithGoogle}>
            Login
          </button>
        </header>
      </div>
    </AuthGoogle>
  );
};

export default App;
