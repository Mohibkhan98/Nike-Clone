import { combineReducers, applyMiddleware, legacy_createStore } from "redux";
import {reducerShoes} from './ProductComponentRedux/ProductComponentReducer'
import { homeReducer } from "./home/reducer";
import thunk from "redux-thunk";
import { reducerhide } from "./ProductComponentRedux/ProductComponentReducer";
import { reducerauth } from "./Authen/reducerauth";
import CartNumberreducer from "./CartNumber/CartNumberreducer";




const rootReducer = combineReducers({
  
  homeReducer,
  reducerShoes,
  reducerhide,
  reducerauth,
  CartNumberreducer
  
  
});

 const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

  store.subscribe(()=>{
     console.log(store.getState())
  })

 export default store
 