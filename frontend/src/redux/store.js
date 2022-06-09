import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';


//reducer
import {cartReducer} from './reducers/cartReducers';
import {getProductsReducer, getProductDetailsReducer} from './reducers/productReducers';

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});

//const middleware = {thunk};
const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(thunk))
);




export default store;