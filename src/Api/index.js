import { API } from './api';


export const getBase = (route) =>{
    return API.getData(route)
}