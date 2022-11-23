import {ADD_TO_CART, NUMBER_CART, SUB_QUANTITY} from '../constant'

const initialState = {
    carts: [],
    total: 0,
    numberCart: 0,
    slideIndex: 0,
}


const cartReducer= (state = initialState, action) => {
            
        switch(action.type) {
        
            case ADD_TO_CART:

 
                 if  (state.numberCart === 0) {
               
                   
                 let cart = {
                     id: action.payload.id,
                     quantity: 1,
                     name: action.payload.name,
                    brand: action.payload.brand,
                    galleries: action.payload.gallery,
                    prices: action.payload.prices
                    
                   
                }
            state.carts.push(cart); 
            
            
                 }
        
        else {
            let check = false;

            state.carts.map((item,key) => {
             
               if (item.id === action.payload.id) {
                   state.carts[key].quantity++;
                   
  
                    check = true;
                
               } return "";}); 

            if (!check) {
                let _cart = {
                    id:action.payload.id,
                    quantity:1,
                    name:action.payload.name,
                    brand:action.payload.brand,
                    galleries:action.payload.gallery,
                    prices: action.payload.prices
                    
                    
                }
                state.carts.push(_cart);
                
  
            }
        }

        return {
            ...state,
            numberCart: state.numberCart + 1
        }

        
        
        case NUMBER_CART:
            return {
                ...state,
            }

            
            case SUB_QUANTITY:
                
                const quantityIndex = state.carts.findIndex(cart => cart.id === action.payload.id)
                
                

                if(state.carts[quantityIndex].quantity === 1) {
                    
                       state.carts[quantityIndex].quantity = 1
                    
                }else {
                    state.carts[quantityIndex].quantity--;
                    state.numberCart--
                }
                return {
                    ...state,
                    
                }

                

        default:
                         return state

       }
    }
    


    


export default cartReducer