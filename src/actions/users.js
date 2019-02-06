import { USERS } from './api';
import { REGISTER_BENGIN, REGISTER_SUCESS, REGISTER_FAILURE, CHECK_USER_LOGGEDIN } from './action-type';
import { getUser } from '../helpers/user';
import axios from 'axios';

export const register = (u) => {
    return dispatch => {
        dispatch(registerBegin());
        return axios.post(USERS.post(), {...u})
            .then( res => {  
                return res.data;
            } )
            .then( res => {
                return dispatch(registerSuccess(res.body));
            } )
            .catch( error => { console.log(error) } );
    }
    

}

export const checkUser = () => {
    return dispatch => {
        let user = getUser();
        dispatch(loadUser(user));
    }
}

export const registerBegin = () => ({
    type: REGISTER_BENGIN
});
export const registerSuccess = (user) => ({
    type: REGISTER_SUCESS,
    payload: {
        user
    }
});
export const registerFailure = error => ({
    type: REGISTER_FAILURE,
    payload: {
        error
    }
});

export const loadUser = user => ({
    type: CHECK_USER_LOGGEDIN,
    payload: {
        user
    }
})

