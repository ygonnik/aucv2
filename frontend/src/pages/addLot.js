import React, {useContext, useState} from 'react'
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from 'react-router-dom'
import { createLot } from '../http/lotAPI';
import { MYLOTS_ROUTE } from '../utils/consts';

const AddLot = observer(() => {
    const navigate = useNavigate()
    const {user, lot} = useContext(Context)
    const [end_at, setEnd_at] = useState(0)
    const [body_style, setBody_style] = useState('')
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [engine_volume, setEngine_volume] = useState('')
    const [power, setPower] = useState('')
    const [mileage, setMileage] = useState('')
    const [fuel, setFuel] = useState('')
    const [drivetrain, setDrivetrain] = useState('')
    const [transmission, setTransmission] = useState('')
    const [color, setColor] = useState('')
    const [steering_wheel, setSteering_wheel] = useState('')
    const [description, setDescription] = useState('')
    const [start_price, setStart_price] = useState('')
    const [redemption_price, setRedemption_price] = useState('')
    const [city, setCity] = useState('')
    const [img, setImg] = useState([])
    const clickAddLot = () => {
        try {
            const formData = new FormData()
            console.log(end_at)
            formData.append('end_at', new Date(+new Date() + Number(end_at)))
            formData.append('body_style', body_style)
            formData.append('brand', brand)
            formData.append('model', model)
            formData.append('engine_volume', engine_volume)
            formData.append('power', power)
            formData.append('mileage', mileage)
            formData.append('fuel', fuel)
            formData.append('drivetrain', drivetrain)
            formData.append('transmission', transmission)
            formData.append('color', color)
            formData.append('steering_wheel', steering_wheel)
            formData.append('description', description)
            formData.append('start_price', start_price)
            formData.append('redemption_price', redemption_price)
            formData.append('city', city)
            formData.append('userId', user.user.id)
            for(let file of img) {
                formData.append(file.name, file)
            }
            createLot(formData).then(data => lot.pushNewLot(data))
            navigate(MYLOTS_ROUTE)
        }
        catch (e) {
            alert(e.response.data.message)
        }
    }

    const selectFile = e => {
        setImg(e.target.files)
    }
    return (
    <div class="container">
        <main class="form-signin m-auto d-flex-inline w-50 justify-content-center">
            <form >
                <h1 class="h3 mb-3 mt-4 fw-normal text-center">???????????????? ????????</h1>

                <select class="form-select form-select-md mb-1 rounded-0 py-3" value={body_style} onChange={e => setBody_style(e.target.value)} >
                    <option selected>?????? ????????????</option>
                    <option value="??????????">??????????</option>
                    <option value="??????????????">??????????????</option>
                    <option value="??????????????????????">??????????????????????</option>
                    <option value="??????????????????">??????????????????</option>
                    <option value="????????">????????</option>
                    <option value="??????????????">??????????????</option>
                    <option value="??????????">??????????</option>
                    <option value="??????????????????">??????????????????</option>
                </select>
                <div class="form-floating mb-1">
                    <input type="text" class="form-control rounded-0" placeholder=" " onChange={e => setBrand(e.target.value)} value={brand}/>
                    <label for="floatingInput">??????????</label>
                </div>
                <div class="form-floating mb-1">
                    <input type="text" class="form-control rounded-0" placeholder=" " onChange={e => setModel(e.target.value)} value={model}/>
                    <label for="floatingInput">????????????</label>
                </div>
                <div class="form-floating mb-1">
                    <input type="number" class="form-control rounded-0" placeholder=" " onChange={e => setEngine_volume(e.target.value)} value={engine_volume}/>
                    <label for="floatingInput">?????????? ?????????????????? ?? ????</label>
                </div>
                <div class="form-floating mb-1">
                    <input type="number" class="form-control rounded-0" placeholder=" " onChange={e => setPower(e.target.value)} value={power}/>
                    <label for="floatingInput">???????????????? ?? ??.??.</label>
                </div>
                <div class="form-floating mb-1">
                    <input type="number" class="form-control rounded-0" placeholder=" " onChange={e => setMileage(e.target.value)} value={mileage}/>
                    <label for="floatingInput">????????????</label>
                </div>
                <select class="form-select form-select-md mb-1 rounded-0 py-3" onChange={e => setFuel(e.target.value)} >
                    <option selected>??????????????</option>
                    <option value="????????????">????????????</option>
                    <option value="????????????">????????????</option>
                    <option value="????????????">????????????</option>
                    <option value="??????????????">??????????????</option>
                </select>
                <select class="form-select form-select-md mb-1 rounded-0 py-3" onChange={e => setDrivetrain(e.target.value)} >
                    <option selected>????????????</option>
                    <option value="????????????????">????????????????</option>
                    <option value="????????????">????????????</option>
                    <option value="????????????">????????????</option>
                </select>
                <select class="form-select form-select-md mb-1 rounded-0 py-3" onChange={e => setTransmission(e.target.value)} >
                    <option selected>??????????????????????</option>
                    <option value="????????????????????????????">????????????????????????????</option>
                    <option value="????????????????????????">????????????????????????</option>
                </select>
                <div class="form-floating mb-1">
                    <input type="text" class="form-control rounded-0" placeholder=" " onChange={e => setColor(e.target.value)} value={color}/>
                    <label for="floatingInput">????????</label>
                </div>
                <select class="form-select form-select-md mb-1 rounded-0 py-3" onChange={e => setSteering_wheel(e.target.value)} >
                    <option selected>????????</option>
                    <option value="??????????">??????????</option>
                    <option value="????????????">????????????</option>
                </select>
                <div class="form-floating mb-1">
                    <input type="number" class="form-control rounded-0" placeholder=" " step="1000" onChange={e => setStart_price(e.target.value)} value={start_price}/>
                    <label for="floatingInput">?????????????????? ??????????????????</label>
                </div>
                <div class="form-floating mb-1">
                    <input type="number" class="form-control rounded-0" placeholder=" " step="1000" onChange={e => setRedemption_price(e.target.value)} value={redemption_price}/>
                    <label for="floatingInput">???????? ????????????</label>
                </div>
                <div class="form-floating mb-2">
                    <input type="text" class="form-control rounded-0" placeholder=" " onChange={e => setCity(e.target.value)} value={city}/>
                    <label for="floatingInput">??????????</label>
                </div>
                <select class="form-select form-select-md mb-1 rounded-0 py-3" onChange={e => setEnd_at(e.target.value)}>
                    <option selected>???????????????????????? ????????????????</option>
                    <option value="259200000">3 ??.</option>
                    <option value="604800000">7 ??.</option>
                    <option value="1209600000">14 ??.</option>
                </select>
                <div class="mb-2">
                    <label for="formFileMultiple" class="form-label">?????????????????? ????????</label>
                    <input class="form-control" type="file" id="formFileMultiple" onChange={selectFile} multiple />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label" >????????????????</label>
                    <textarea class="form-control"  rows="3" onChange={e => setDescription(e.target.value)} value={description}></textarea>
                </div>


                <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={clickAddLot}>?????????????? ??????</button>
                <p class="mt-5 mb-3 text-muted text-center">&copy; 2017???2022</p>
            </form>
        </main>
    </div>
    );
});

export default AddLot;
