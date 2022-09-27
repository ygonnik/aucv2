import React from 'react';
import {Container} from 'react-bootstrap'

function signup() {
    return (
    <Container class="text-center">
        <main class="form-signin w-100 m-auto">
            <form>
                <h1 class="h3 mb-3 fw-normal">Регистрация</h1>

                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com" />
                    <label for="floatingInput">Электронная почта</label>
                </div>
                <div class="form-floating">
                    <input type="text" class="form-control" id="floatingFirstName" placeholder="Alex" />
                    <label for="floatingInput">Никнейм</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Пароль</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingRepeatPassword" placeholder="Password" />
                    <label for="floatingPassword">Повторите пароль</label>
                </div>

                <button class="w-100 btn btn-lg btn-primary" type="submit">Зарегистрироваться</button>
                <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
            </form>
        </main>
    </Container>
    );
};

export default signup;
