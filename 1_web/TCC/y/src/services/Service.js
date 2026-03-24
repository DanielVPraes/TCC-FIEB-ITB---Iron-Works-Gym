import API from "./api";
 
export async function listarUsuario(){
    let URL = "usuario/findAll";
    try{
        const response = await API.get(URL);
        console.log(response.data);
        return response.data;
    }catch (error){
        console.log(error)
        return false;
    }
}
 
export async function login(email, senha){
    let URL = `usuario/signin?email=${email}&senha=${senha}`;
    try{
        const response = await API.post(URL);
        console.log(response);
        return response;
    }catch (error){
        console.log(error)
        throw new Error('Erro ao fazer login' + error);
    }
}

export async function criarEquipamento(body){
    let URL = "equipamento/create";
    try{
        const response = await API.post(URL, body);
        console.log(response.data);
        return response.data;
    }catch (error){
        console.log(error)
        throw new Error('Nao foi');
    }
}