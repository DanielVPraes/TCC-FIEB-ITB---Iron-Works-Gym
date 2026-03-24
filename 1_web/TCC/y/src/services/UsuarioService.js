import http from '../common/http-common';
const API_URL = "usuario/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

const signup = (nome, email, password) => {
    return http.mainInstance.post(API_URL + "signup", {
        nome,
        email,
        password,
    });
};

const signin = async (email, senha) => {
    const response = await http.mainInstance
        .post(API_URL + "signin", {
            email,
            senha,
        });
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const create = data => {
    const formData = new FormData();
    formData.append('nome', data.nome);
    formData.append('email', data.email);
    formData.append('nivelAcesso', data.nivelAcesso);
    formData.append('Data_Nascimento', data.Data_Nascimento);
    formData.append('Telefone', data.Telefone);
    formData.append('Senha', data.Senha);
    formData.append('CPF', data.CPF);
    formData.append('Torre', data.Torre);
    formData.append('Apartamento', data.Apartamento);
    //Data_Nascimento
    //Senha

    return http.mainInstance.post(API_URL + "create", formData);
};

const alterar = (id, data) => {
    const formData = new FormData();
    formData.append('nome', data.nome);
    formData.append('dataNascimento', data.dataNascimento);
    formData.append('telefone', data.telefone);
    formData.append('email', data.email);
    formData.append('senha', data.senha);
    formData.append('cpf', data.cpf);
    formData.append('torre', data.torre);
    formData.append('apartamento', data.apartamento);
 
    return http.mainInstance.put(API_URL + `alterar/${id}`, formData);
};

const update = (id, data) => {
    return http.multipartInstance.put(API_URL + `update/${id}`, data);
};

const alterarSenha = (id, data) => {
    const formData = new FormData();
    formData.append('senha', data.senha);
 
    return http.mainInstance.put(API_URL + `alterarSenha/${id}`, formData);
};

const findByNome = nome => {
    return http.mainInstance.get(API_URL + `findByNome?nome=${nome}`);
};


const UsuarioService = {
    findAll,
    findById,
    signup,
    signin,
    logout,
    getCurrentUser,
    create,
    alterar,
    update,
    alterarSenha,
    findByNome,
}

export default UsuarioService;