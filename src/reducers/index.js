import { combineReducers } from 'redux';
import categories from './categories';
import products from './products';
import product from './product';
import cart from './cart';
import user from './user';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    categories,
    products,
    product,
    cart,
    user,
    form: formReducer,
});