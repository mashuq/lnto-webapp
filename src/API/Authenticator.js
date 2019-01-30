import axios from 'axios';

let config = {
    headers: {
        "Origin": "http://localhost:3000",
    }
}

let Authenticator = {};

Authenticator.isUserLoggedIn = async function () {
    let userJson = localStorage.getItem("appuser");
    if (userJson == null) {
        return false;
    }
    try {
        let user = JSON.parse(userJson);
        let configClone = Object.assign({}, config);
        configClone.headers["x-access-token"] = user.token;
        let result = await axios.post("http://localhost:8080/verifyToken",{},configClone);
        return true;
    } catch (error) {
        return false;
    }
}

Authenticator.loginUser = async function (loginInformation) {
    return new Promise(async function (resolve, reject) {
        try{
            let result = await axios.post("http://localhost:8080/getToken", loginInformation, config);
            let user = {uuid:result.data.uuid, token:result.data.token};
            localStorage.setItem("appuser", JSON.stringify(user));
            resolve(result.data);
        }catch(error){
            if(error.response && error.response.data){
                reject(error.response.data.message);
            }else{
                reject(String(error));
            }
        }
    });
}

Authenticator.registerUser = async function (registrationInformation) {
    return new Promise(async function (resolve, reject) {
        try{
            let result = await axios.post("http://localhost:8080/createUser", registrationInformation, config);
            resolve(result.data.message);
        }catch(error){
            if(error.response && error.response.data){
                reject(error.response.data.message);
            }else{
                reject(String(error));
            }
        }
    });
}

export default Authenticator;