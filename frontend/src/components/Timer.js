import React from 'react';
import { observer } from 'mobx-react-lite';



const Timer = observer((props) => {
    return (
        <div>
            <p>{props.timerState.timerHours}:{props.timerState.timerMinutes}:{props.timerState.timerSeconds}</p>
        </div>
    );
});

export default Timer;