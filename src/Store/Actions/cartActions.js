import * as types from '../constant';


export const addToCart = (payload) => {
    return{
        type: types.ADD_TO_CART, 
        payload
    }
}

export const getNumberCart = () => {
   
    return {
        type: types.NUMBER_CART
    }
}

export const addQuantity = (payload) => {

    return {
        type: types.ADD_QUANTITY,
        payload
    }

}


export const subQuantity = (payload) => {
    return {
        type: types.SUB_QUANTITY,
        payload
    }
}