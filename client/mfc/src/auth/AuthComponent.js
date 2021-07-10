import React from 'react'

export default function AuthComponent() {
    return (
        <div className="authorizationPage">
            <img width="256" height="256"/>
            <form className="formAuthorization">
                <p>
                    Логин / имя пользователя
                </p>
                <input type="text" className="loginForm" />
                <p>
                    Пароль
                </p>
                <input type="password" className="passForm" />
                <br />
                <button onClick={() => console.log('auth')}>Авторизоваться</button>
            </form>
        </div>
    )
}