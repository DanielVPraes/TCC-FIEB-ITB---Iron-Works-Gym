import http from '../common/http-common';
const API_URL = "agendamento/";

const findAll = () => {
    return http.mainInstance.get(API_URL + 'findAll');
};

const findById = (id) => {
    return http.mainInstance.get(API_URL + `findById/${id}`);
};

const inativar = (id) => {
    return http.mainInstance.put(API_URL + `inativar/${id}`);
};

const ativar = (id) => {
    return http.mainInstance.put(API_URL + `reativar/${id}`);
};

const AgendamentoService = {
    findAll,
    findById,
    inativar,
    ativar,
}

export default AgendamentoService;