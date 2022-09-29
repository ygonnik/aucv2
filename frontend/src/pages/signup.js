import React from 'react';
import {Container} from 'react-bootstrap'

function signup() {
    return (
    <Container>
        <main class="form-signin m-auto d-flex-inline w-50 justify-content-center">
            <form>
                <h1 class="h3 mb-3 mt-4 fw-normal text-center">Регистрация</h1>

                <div class="form-floating">
                    <input type="email" class="form-control rounded-0" id="floatingEmail" placeholder="name@example.com" />
                    <label for="floatingInput">Электронная почта</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control rounded-0" id="floatingFirstName" placeholder="Alex" />
                    <label for="floatingInput">Никнейм</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control rounded-0" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Пароль</label>
                </div>
                <div class="form-floating mb-1">
                    <input type="password" class="form-control rounded-0" id="floatingRepeatPassword" placeholder="Password" />
                    <label for="floatingPassword">Повторите пароль</label>
                </div>

                <button class="w-100 btn btn-lg btn-primary" type="submit">Зарегистрироваться</button>
                <p class="mt-5 mb-3 text-muted text-center">&copy; 2017–2022</p>
            </form>
        </main>
    </Container>
    );
};

export default signup;
