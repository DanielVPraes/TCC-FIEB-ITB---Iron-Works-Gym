import http from '../common/http-common';
const API_URL = "equipamento/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

const create = data => {
    const formData = new FormData();
    formData.append('Nome', data.Nome);
    formData.append('Quantidade', data.Quantidade);

    return http.mainInstance.post(API_URL + "create", formData);
};

const inativar = (id) => {
    return http.mainInstance.put(API_URL + `inativar/${id}`);
};

const ativar = (id) => {
    return http.mainInstance.put(API_URL + `ativar/${id}`);
};

const marcarComoLida = (id) => {
    return http.mainInstance.put(API_URL + `marcarComoLida/${id}`);
};

const EquipamentoService = {
    findAll,
    findById,
    create,
    inativar,
    ativar,
    marcarComoLida,
}

export default EquipamentoService;