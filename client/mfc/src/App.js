import { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [LoginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  const auth = () => {
    Axios.post('http://localhost:3001/login', {
      username: login, 
      password: pass,
    }).then((response) => {
      if (!response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].login);
      }
    });
  }

  return (
    <div className="App">
      <div className="authorizationPage">
            <img width="256" height="256"/>
              <p>
                  Логин / имя пользователя
              </p>
              <input type="text" className="loginForm" onChange={(e) => setLogin(e.target.value)}/>
              <p>
                  Пароль
              </p>
              <input type="password" className="passForm" onChange={(e) => setPass(e.target.value)}/>
              <br />
              <button onClick={auth}>Авторизоваться</button>
        </div>
    </div>
  );
}

export default App;
