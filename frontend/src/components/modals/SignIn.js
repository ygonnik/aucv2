import React, {useContext, useState} from "react";
import {Context} from '../../index'
import {useNavigate} from 'react-router-dom'
import {ADMIN_ROUTE, SIGNUP_ROUTE, ADDLOT_ROUTE, HOME_ROUTE} from '../../utils/consts'
import {observer} from "mobx-react-lite"
import {login} from '../../http/userAPI'

const SignIn = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate()
    const [emailNickname, setEmailNickname] = useState('')
    const [password, setPassword] = useState('')

    const clickLogin = async () => {
        try {
            let dataUser
            dataUser = await login(emailNickname, password)
            user.setUser(dataUser)
            user.setIsAuth(true)
            navigate(HOME_ROUTE)
        }
        catch (e) {
            alert(e.response.dataUser.message)
        }
    }
        return (
            <div>
                {user.isAuth ?
                    <div class="d-flex">
                        <button type="button" class="btn btn-dark border border-2 mx-1" onClick={() => navigate(ADDLOT_ROUTE)}>
                            Создать лот
                        </button>
                        <button type="button" class="btn btn-dark border border-2 mx-1" onClick={() => navigate(ADMIN_ROUTE)}>
                            Админ панель
                        </button>
                        <button type="button" class="btn btn-dark border border-2 mx-1" onClick={() => user.setIsAuth(false)}>
                            Выйти
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                                <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                            </svg>
                        </button>
                        </div>
                    :
                    <button  type="button" class="btn btn-dark border border-2" data-bs-toggle="modal" data-bs-target="#loginModal">
                        Войти
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                            <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                        </svg>
                    </button>
                }
                <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title " id="ModalLabel">Вход</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <input type="text" class="form-control mb-3" placeholder="Электронная почта или никнейм" aria-label="Username"
                                value={emailNickname}
                                onChange={e => setEmailNickname(e.target.value)}/>
                                <input type="text" class="form-control mb-3" placeholder="Пароль" aria-label="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}/>
                                <div class="d-flex justify-content-center">
                                    <button type="button" class="btn btn-outline-info btn-sm" data-bs-dismiss="modal" onClick={() => navigate(SIGNUP_ROUTE)}>Регистрация</button>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={clickLogin}>Войти</button>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Отменить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    })

export default SignIn;
