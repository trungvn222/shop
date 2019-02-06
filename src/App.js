import React, {
    Component
} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

/*
    INTERNAL PACKAGE
*/
import rootReducer from './reducers';
import './App.css';

/* 
    COMPONENTS
*/
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './container/Home';
import Categories from './container/categories';
import ProductDetail from './container/product-detail';
import Cart from './container/cart';
import Page404 from './container/404';
import Register from './container/register';
import Benefit from './components/Benefit';
import { CATEGORY_URI, PRODUCT_DETAIL_URI, CART_URI, REGISTER_URI } from './const/route';

import { checkUser } from './actions/users';


let __applyMiddleware = window.__REDUX_DEVTOOLS_EXTENSION__ === undefined ? compose(applyMiddleware(thunk)) :
compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore( rootReducer, __applyMiddleware);

class App extends Component {
    componentDidMount(){
        store.dispatch(checkUser());
    }
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="super_container">
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path={`${CATEGORY_URI}/:id?`} component={Categories} />
                            <Route path={`${PRODUCT_DETAIL_URI}/:id?`} component={ProductDetail} />
                            <Route path={`${CART_URI}`} component={Cart} />
                            <Route path={`${REGISTER_URI}`} component={Register} />
                            <Route component={Page404} />
                        </Switch>
                        <Benefit />
                        <Footer />
                    </div>
			    </Router>
            </Provider>
        );
    }
}

export default App;
