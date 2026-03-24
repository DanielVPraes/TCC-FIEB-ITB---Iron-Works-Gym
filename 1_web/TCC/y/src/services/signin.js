import http from '../common/http-common';
import { API_URL } from './UsuarioService';

const signin = async (email, senha) => {
    const response = await http.mainInstance
        .post(`${API_URL}signin`, {
            email,
            senha,
        });
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};
