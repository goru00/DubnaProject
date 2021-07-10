import { useState } from 'react';
import './App.css';
import AuthComponent from './auth/AuthComponent';

function App() {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="App">
      <AuthComponent login={setLogin} pass={setPass} />
    </div>
  );
}

export default App;
