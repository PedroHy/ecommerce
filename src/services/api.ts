import axios from "axios";
import { parseCookies } from "nookies";

const { 'client.token': token } = parseCookies();

export const api = axios.create({
    baseURL:'http://localhost:3000/'
})

if(token){
    api.defaults.headers['Authorizathion'] = `Bearer ${token}`;
}