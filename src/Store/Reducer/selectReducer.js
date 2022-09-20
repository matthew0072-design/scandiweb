import {CHANGE_VALUE} from '../constant';

const initialState = {
    value: "$"
}

export default function changeValue(state = initialState, action) {
    if (action.type === CHANGE_VALUE) {
     return{...state, value:action.payload}
    }

    
    else {
        return state
    }
}