import React, {useContext, useState, useEffect}  from 'react';
import {Context} from '../index'
import Timer from '../components/Timer';
import {useParams} from 'react-router-dom'
import { fetchOneLot, changeApproveLot } from '../http/lotAPI';
import {useNavigate} from 'react-router-dom'
import { ADMIN_ROUTE } from '../utils/consts';

function LotPage() {
  const {user} = useContext(Context);
  const navigate = useNavigate()
  const [lot, setLot] = useState({})
  const [imgs, setImgs] = useState([])
  const {id} = useParams()

  const Set = (data) => {
    let imgs = data.img.split(' ')
    imgs.pop()
    setImgs(imgs)
    setLot(data)
  }
  const approve = () => {
    changeApproveLot(id, "1")
    navigate(ADMIN_ROUTE)
  }
  const decline = () => {
    changeApproveLot(id, "2")
    navigate(ADMIN_ROUTE)
  }
  useEffect(() => {
    fetchOneLot(id)
    .then(data => Set(data))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const redemption = lot.redemption_price > 0
    return (
      <div class = 'container mt-3 align-items-center justify-content-center'>
        <div class="row">
          <div class="col-9">
          <h2>{lot.brand + ' ' + lot.model}</h2>
          <div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner" id="carousel-imgs">
                <div class="carousel-item active" data-bs-interval="10000" > 
                  <img src={process.env.REACT_APP_API_URL + imgs.shift()} class="d-block w-100" alt="..."/>
                </div>
                {imgs.map( img => 
                  <div class="carousel-item" data-bs-interval="10000" key={img}> 
                    <img src={process.env.REACT_APP_API_URL + img} class="d-block w-100" alt="..."/>
                  </div>)
                }
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
              До окончания аукциона осталось: <Timer end_at={lot.end_at} />
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
            <p>Авторизуйтесь чтобы сделать ставку или написать продавцу.</p>
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
          { user.isAuth && user.user.role === 'ADMIN'
          ? 
          <div class="text-center">
            <button type="button" class="btn btn-outline-success mx-1 mt-2" onClick={approve}>Выставить лот</button>
            <button type="button" class="btn btn-outline-danger mx-1 mt-2" onClick={decline}>Отклонить заявку</button>
          </div>
          : null
          }
        </div>
      </div>
    );
};

export default LotPage;
