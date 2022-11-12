import React, {useState, useContext} from 'react';
import {Context} from '../index';
import {registration, fetchUsersNicknames, fetchMessages} from '../http/userAPI'
import {useNavigate} from 'react-router-dom'
import { HOME_ROUTE } from '../utils/consts';
import {observer} from "mobx-react-lite";
import { set } from 'mobx';

const Signup = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    const [email, setEmail] = useState('')
    const [nickname, setNickname] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [admin, setAdmin] = useState(false)

    const clickRegister = async () => {
        try {
            const role = admin ? 'ADMIN' : 'USER'
            registration(email, nickname, password, role).then((data) => {
                user.setUser(data)
                user.setIsAuth(true)
            }).then(
            fetchUsersNicknames()
            .then(data => {
                user.setUsers(data)}))
            navigate(HOME_ROUTE)
        }
        catch (e) {
            alert(e.response.data.message)
        }
    }
    const checkCheckBox = async () => {
        if (document.getElementById('flexCheckDefault').hasAttribute('checked')) {
            document.getElementById('flexCheckDefault').removeAttribute('checked')
            setAdmin(false)
        }
        else {
            document.getElementById('flexCheckDefault').setAttribute('checked', '')
            setAdmin(true)
        }
    }
    return (
    <div class="container">
        <main class="form-signin m-auto d-flex-inline w-50 justify-content-center">
            <form>
                <h1 class="h3 mb-3 mt-4 fw-normal text-center">Регистрация</h1>

                <div class="form-floating mb-1">
                    <input type="email" class="form-control rounded-0" id="floatingEmail" placeholder="name@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
                    <label for="floatingInput">Электронная почта</label>
                </div>
                <div class="form-floating mb-1">
                    <input type="text" class="form-control rounded-0" id="floatingFirstName" placeholder="Alex"
                    value={nickname}
                    onChange={e => setNickname(e.target.value)} />
                    <label for="floatingInput">Никнейм</label>
                </div>
                <div class="form-floating mb-1">
                    <input type="password" class="form-control rounded-0" id="floatingPassword" placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>
                    <label for="floatingPassword">Пароль</label>
                    
                </div>
                <div class="form-floating mb-1">
                    <input type="password" class="form-control rounded-0" id="floatingRepeatPassword" placeholder="Password"
                    value={repeatPassword}
                    onChange={e => setRepeatPassword(e.target.value)}/>
                    <label for="floatingPassword">Повторите пароль</label>
                </div>
                <div class="form-check mb-2 d-flex justify-content-center" onClick={checkCheckBox}>
                    <input class="form-check-input me-1" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        Администратор
                    </label>
                </div>
                { (password !== repeatPassword) ?
                <div>
                    <div class="text-center text-danger">
                        <p>Введенные пароли не совпадают</p>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit" id="registerButton" onClick={clickRegister} disabled>Зарегистрироваться</button>
                </div>
                :
                <button class="w-100 btn btn-lg btn-primary" type="submit" id="registerButton" onClick={clickRegister}>Зарегистрироваться</button>
                }
                
                <p class="mt-5 mb-3 text-muted text-center">&copy; 2022</p>
            </form>
        </main>
    </div>
    );
});

export default Signup;
