import React from 'react'

function addLot() {
    return (
    <div class="container">
        <main class="form-signin m-auto d-flex-inline w-50 justify-content-center">
            <form>
                <h1 class="h3 mb-3 mt-4 fw-normal text-center">Создание лота</h1>

                <select class="form-select form-select-md mb-1 rounded-0 py-3">
                    <option selected>Тип кузова</option>
                    <option value="1">Седан</option>
                    <option value="2">Хэтчбек</option>
                    <option value="3">Внедорожник</option>
                    <option value="4">Универсал</option>
                    <option value="5">Купэ</option>
                    <option value="6">Минивэн</option>
                    <option value="7">Пикап</option>
                    <option value="8">Кабриолет</option>
                </select>
                <div class="form-floating mb-1">
                    <input type="text" class="form-control rounded-0" placeholder=" "/>
                    <label for="floatingInput">Марка</label>
                </div>
                <div class="form-floating mb-1">
                    <input type="text" class="form-control rounded-0" placeholder=" "/>
                    <label for="floatingInput">Модель</label>
                </div>
                <div class="form-floating mb-1">
                    <input type="number" class="form-control rounded-0" placeholder=" "/>
                    <label for="floatingInput">Объем двигателя в см</label>
                </div>
                <div class="form-floating mb-1">
                    <input type="number" class="form-control rounded-0" placeholder=" "/>
                    <label for="floatingInput">Мощность в л.с.</label>
                </div>
                <div class="form-floating mb-1">
                    <input type="number" class="form-control rounded-0" placeholder=" "/>
                    <label for="floatingInput">Пробег</label>
                </div>
                <select class="form-select form-select-md mb-1 rounded-0 py-3">
                    <option selected>Топливо</option>
                    <option value="1">Бензин</option>
                    <option value="2">Дизель</option>
                    <option value="3">Гибрид</option>
                    <option value="4">Электро</option>
                </select>
                <select class="form-select form-select-md mb-1 rounded-0 py-3">
                    <option selected>Привод</option>
                    <option value="1">Передний</option>
                    <option value="2">Задний</option>
                    <option value="3">Полный</option>
                </select>
                <select class="form-select form-select-md mb-1 rounded-0 py-3">
                    <option selected>Трансмиссия</option>
                    <option value="1">Автоматическая</option>
                    <option value="2">Механическая</option>
                </select>
                <div class="form-floating mb-1">
                    <input type="text" class="form-control rounded-0" placeholder=" "/>
                    <label for="floatingInput">Цвет</label>
                </div>
                <select class="form-select form-select-md mb-1 rounded-0 py-3">
                    <option selected>Руль</option>
                    <option value="1">Левый</option>
                    <option value="2">Правый</option>
                </select>
                <div class="form-floating mb-1">
                    <input type="number" class="form-control rounded-0" placeholder=" " step="1000"/>
                    <label for="floatingInput">Начальная стоимость</label>
                </div>
                <div class="form-floating mb-1">
                    <input type="number" class="form-control rounded-0" placeholder=" " step="1000"/>
                    <label for="floatingInput">Цена выкупа</label>
                </div>
                <div class="form-floating mb-2">
                    <input type="text" class="form-control rounded-0" placeholder=" "/>
                    <label for="floatingInput">Город</label>
                </div>
                <select class="form-select form-select-md mb-1 rounded-0 py-3">
                    <option selected>Длительность аукциона</option>
                    <option value="1">3 д.</option>
                    <option value="2">7 д.</option>
                    <option value="1">14 д.</option>
                </select>
                <div class="mb-2">
                    <label for="formFileMultiple" class="form-label">Загрузить фото</label>
                    <input class="form-control" type="file" id="formFileMultiple" multiple/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Описание</label>
                    <textarea class="form-control"  rows="3"></textarea>
                </div>


                <button class="w-100 btn btn-lg btn-primary" type="submit">Создать лот</button>
                <p class="mt-5 mb-3 text-muted text-center">&copy; 2017–2022</p>
            </form>
        </main>
    </div>
    );
};

export default addLot;
