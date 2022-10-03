import React from 'react';
import { observer } from 'mobx-react-lite';
import { observable, action} from 'mobx'

const Timer = observer((props) => {
    const differenceTime = (new Date(Date.parse(props.end_at) - new Date()))
    let timerState = observable({
        timerSeconds: null,
        timerMinutes: null,
        timerHours: null,
        timerDays: null,
    });
    if (differenceTime > 0) {
        timerState.timerSeconds = differenceTime.getUTCSeconds()
        timerState.timerMinutes = differenceTime.getUTCMinutes()
        timerState.timerHours = differenceTime.getUTCHours()
        timerState.timerDays = Math.floor(differenceTime/86400000)
    }
    else {
        timerState.timerSeconds = 0
        timerState.timerMinutes = 0
        timerState.timerHours = 0
        timerState.timerDays = 0
    }
    const timerId = setInterval(action(function tick() {
        if (timerState.timerSeconds - 1 < 0) {
            if (timerState.timerMinutes - 1 < 0) {
                if (timerState.timerHours - 1 < 0) {
                    if (timerState.timerDays - 1 < 0) {
                        clearInterval(timerId)
                    }
                    else {
                        timerState.timerDays -= 1
                        timerState.timerHours = 23
                        timerState.timerMinutes = 59
                        timerState.timerSeconds = 59
                    }
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
    }, 1000));
    return (
        <div>
            <p> {timerState.timerDays} дней {timerState.timerHours}:{timerState.timerMinutes}:{timerState.timerSeconds}</p>
        </div>
    );
});

export default Timer;