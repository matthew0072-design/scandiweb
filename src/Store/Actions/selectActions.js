import * as types from '../constant';

export const changeValue = (payload) => {
    
    return {
        type: types.CHANGE_VALUE, 
        payload
    }
        
    
}