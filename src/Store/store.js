import {createStore, combineReducers} from 'redux';
import selectReducer from './Reducer/selectReducer';
import cartReducer from './Reducer/cartReducer'
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer,
     } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
   };

const rootReducer = combineReducers({
    selects: selectReducer,
    cartItem: cartReducer
})

const pReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(pReducer, composeWithDevTools())
export const persistor = persistStore(store);