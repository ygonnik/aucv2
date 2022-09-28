import React from 'react';
import {Container} from 'react-bootstrap'

function lotPage() {
  const lot = 
  {id: 1,
  end_at: '2022-09-29 12:24:28.096+05',
  body_style: 'Хэтчбек',
  brand: 'Audi',
  model: 'A3',
  engine_volume: 2100,
  power: 120,
  mileage: 65444,
  fuel: 'Бензин',
  drivetrain: 'Передний',
  transmission: 'Механическая',
  color: 'Красный',
  steering_wheel: 'Правый',
  description: 'Не бита, не крашена.',
  start_price: 30000,
  redemption_price: 200000,
  city: 'Тюмень',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/2020_Audi_A3_S_Line_Edition_1_35_TD_2.0.jpg/305px-2020_Audi_A3_S_Line_Edition_1_35_TD_2.0.jpg',
  userId: 1}
  const redemption = lot.redemption_price > 0
    return (
      <Container className = 'mt-3 align-items-center justify-content-center'>
        <div class="row">
          <div class="col-9">
          <h2>{lot.brand + ' ' + lot.model}</h2>
          <div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <img src={lot.img} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src={lot.img} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                  <img src={lot.img} class="d-block w-100" alt="..."/>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="col-3 mt-auto">
            <ul class="list-group list-group-horizontal ">
                <li class="list-group-item rounded-0">Начальная цена</li>
                <li class="list-group-item rounded-0">{lot.start_price}</li>
            </ul>
            { redemption ?
              <ul class="list-group list-group-horizontal">
                <li class="list-group-item rounded-0">Цена выкупа</li>
                <li class="list-group-item rounded-0">{lot.redemption_price}</li>
            </ul>
            : null
            }
            <div class="input-group">
              <input type="text" class="form-control" aria-label="Рубли"/>
              <span class="input-group-text">₽</span>
              <button class="btn btn-outline-secondary" type="button" id="button-addon">Сделать ставку</button>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <ul class="list-group list-group-horizontal ">
              <li class="list-group-item rounded-0">Тип кузова</li>
              <li class="list-group-item rounded-0">{lot.body_style}</li>
            </ul>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item rounded-0">Объем двигателя</li>
              <li class="list-group-item rounded-0">{lot.engine_volume / 1000} л.</li>
            </ul>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item rounded-0">Мощность</li>
              <li class="list-group-item rounded-0">{lot.power} л.с.</li>
            </ul>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item rounded-0">Пробег</li>
              <li class="list-group-item rounded-0">{lot.mileage} км.</li>
            </ul>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item rounded-0">Топливо</li>
              <li class="list-group-item rounded-0">{lot.fuel}</li>
            </ul>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item rounded-0">Привод</li>
              <li class="list-group-item rounded-0">{lot.drivetrain}</li>
            </ul>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item rounded-0">Трансмиссия</li>
              <li class="list-group-item rounded-0">{lot.transmission}</li>
            </ul>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item rounded-0">Цвет</li>
              <li class="list-group-item rounded-0">{lot.color}</li>
            </ul>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item rounded-0">Рулевое колесо</li>
              <li class="list-group-item rounded-0">{lot.steering_wheel}</li>
            </ul>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item rounded-0">Город</li>
              <li class="list-group-item rounded-0">{lot.city}</li>
            </ul>
            <ul class="list-group list-group-horizontal mt-3">
              <li class="list-group-item rounded-0">Описание</li>
            </ul>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item rounded-0">{lot.description}</li>
            </ul>
          </div>
        </div>
      </Container>
    );
};

export default lotPage;
