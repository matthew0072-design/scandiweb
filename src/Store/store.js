import {createStore, combineReducers} from 'redux';
import selectReducer from './Reducer/selectReducer';
import cartReducer from './Reducer/cartReducer'
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    selects: selectReducer,
    cartItem: cartReducer
})

const store = createStore(rootReducer, composeWithDevTools())

export default store