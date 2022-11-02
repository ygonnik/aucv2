import React, {useState, useContext} from 'react';
import {Context} from '../index';
import {registration, fetchUsersNicknames, fetchMessages} from '../http/userAPI'
import {useNavigate} from 'react-router-dom'
import { HOME_ROUTE } from '../utils/consts';
import {observer} from "mobx-react-lite";

const Signup = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)
    const [email, setEmail] = useState('')
    const [nickname, setNickname] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')

    const clickRegister = async () => {
        try {
            let dataUser
            dataUser = await registration(email, nickname, password)
            user.setUser(dataUser)
            user.setIsAuth(true)
            fetchMessages(user.user.id)
            .then(data => {
                user.setMessages(data)
            }).then(fetchUsersNicknames()
            .then(data => {
                user.setInterlocutors(data)
                user.setSelectedInterlocutor(user.interlocutors[0])}))
            navigate(HOME_ROUTE)
        }
        catch (e) {
            alert(e.response.data.message)
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
                <div class="form-floating mb-2">
                    <input type="password" class="form-control rounded-0" id="floatingRepeatPassword" placeholder="Password"
                    value={repeatPassword}
                    onChange={e => setRepeatPassword(e.target.value)}/>
                    <label for="floatingPassword">Повторите пароль</label>
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
