import React, {useContext}  from 'react';
import {Container} from 'react-bootstrap'
import {Context} from '../index'
import Timer from '../components/Timer';
import { observable } from 'mobx'

function LotPage() {
  const lot = 
  {id: 1,
  end_at: '2022-10-01 20:00:00.096+05',
  approved: '0',
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
  const {user} = useContext(Context);
  let timerState = observable({
    timerSeconds: (new Date(Date.parse(lot.end_at) - new Date())).getUTCSeconds(),
    timerMinutes: (new Date(Date.parse(lot.end_at) - new Date())).getUTCMinutes(),
    timerHours: (new Date(Date.parse(lot.end_at) - new Date())).getUTCHours()
  });
  const timerId = setInterval(function tick() {
    if (timerState.timerSeconds - 1 < 0) {
      if (timerState.timerMinutes - 1 < 0) {
        if (timerState.timerHours - 1 < 0) {
          clearInterval(timerId)
        }
        else {
          timerState.timerHours -= 1
          timerState.timerMinutes = 59
          timerState.timerSeconds = 59
        }
      }
      else {
        timerState.timerMinutes -= 1
        timerState.timerSeconds = 59
      }
    }
    else {
      timerState.timerSeconds -= 1
    }
  }, 1000);
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
            <div class="text-center">
              До окончания аукциона осталось: <Timer timerState = {timerState} />
            </div>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th scope="row">Начальная цена</th>
                  <td>{lot.start_price}</td>
                </tr>
                { redemption ?
                <tr>
                  <th scope="row">Цена выкупа</th>
                  <td>{lot.redemption_price}</td>
                </tr>
                : null
                }
              </tbody>
            </table>
            { user.isAuth ?
            <div class="input-group mt-2">
              <input type="text" class="form-control" aria-label="Рубли"/>
              <span class="input-group-text">₽</span>
              <button class="btn btn-outline-secondary rounded-end" type="button" id="button-addon">Сделать ставку</button>
              <button class="btn btn-outline-secondary rounded-2 mx-auto mt-2" type="button">Написать продавцу</button>
            </div>
            :
            <p>Авторизируйтесь, чтобы сделать ставку или написать продавцу.</p>
            }
          </div>
        </div>
        <div class="row mt-4">
          <table class="table table-bordered">
            <tbody>
            <tr>
              </tr>
              <tr>
                <th scope="row">Тип кузова</th>
                <td>{lot.body_style}</td>
              </tr>
              <tr>
                <th scope="row">Объем двигателя</th>
                <td>{lot.engine_volume / 1000} л.</td>
              </tr>
              <tr>
                <th scope="row">Мощность</th>
                <td>{lot.power} л.с.</td>
              </tr>
              <tr>
                <th scope="row">Пробег</th>
                <td>{lot.mileage} км.</td>
              </tr>
              <tr>
                <th scope="row">Топливо</th>
                <td>{lot.fuel}</td>
              </tr>
              <tr>
                <th scope="row">Привод</th>
                <td>{lot.drivetrain}</td>
              </tr>
              <tr>
                <th scope="row">Трансмиссия</th>
                <td>{lot.transmission}</td>
              </tr>
              <tr>
                <th scope="row">Цвет</th>
                <td>{lot.color}</td>
              </tr>
              <tr>
                <th scope="row">Рулевое колесо</th>
                <td>{lot.steering_wheel}</td>
              </tr>
              <tr>
                <th scope="row">Город</th>
                <td>{lot.city}</td>
              </tr>
            </tbody>
          </table>
          <div class="col ps-0">
            <ul class="list-group list-group-horizontal mt-3 text-center ">
              <li class="list-group-item rounded-0 fw-bold border border-bottom-0">Описание</li>
            </ul>
            <ul class="list-group list-group-horizontal">
              <li class="list-group-item rounded-0 flex-fill">{lot.description}</li>
            </ul>
          </div>
          { user.isAuth  ? //&& user.role === 'ADMIN'
          <div class="text-center">
            <button type="button" class="btn btn-outline-success mx-1 mt-2">Выставить лот</button>
            <button type="button" class="btn btn-outline-danger mx-1 mt-2">Отклонить заявку</button>
          </div>
          : null
          }
        </div>
      </Container>
    );
};

export default LotPage;
