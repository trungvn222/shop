import { reactLocalStorage } from 'reactjs-localstorage';
import {USER} from '../const/assets';


export const login = user => {
    reactLocalStorage.setObject(USER, user);
}
export const logout = () => {
    reactLocalStorage.setObject(USER, null);
}
export const getUser = () => {
    return reactLocalStorage.getObject(USER);
}
export const isLoggedIn = () => {
    let user = reactLocalStorage.getObject(USER);
    console.log(user);
    return user !== null && user.username !== undefined;
}