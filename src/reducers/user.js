import { REGISTER_BENGIN, REGISTER_SUCESS, REGISTER_FAILURE, CHECK_USER_LOGGEDIN } from '../actions/action-type';
import { login, getUser } from '../helpers/user';

const initialState = {
    user: null,
    loading: false,
    error: null
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_BENGIN:
            return {
                ...state,
                loading: true
            }
        case REGISTER_SUCESS: {
            const {user} = action.payload;
            login(user);
            return {
                ...state,
                user,
                loading:false
            }
        }
        case REGISTER_FAILURE: {
            const {error} = action.payload;
            return {
                ...state,
                loading: false,
                error
            }
        }
        case CHECK_USER_LOGGEDIN: {
            const {user} = action.payload;
            return {
                ...state,
                user
            }
        }
        default:
            return state;
    }
}

export default userReducer;