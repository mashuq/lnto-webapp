import axios from 'axios';

let config = {
    headers: {
        "Origin":"http://localhost:3000",
    }
}

let Authenticator = {};
Authenticator.USER = "user";

Authenticator.isUserLoggedIn = async function () {
    let user = localStorage.getItem(this.USER);
    if (user == null) {
        return false;
    }
    try {
        let result = await axios.post("http://localhost:8080/verifyToken", {}, Object.assign({"x-access-token": user.token}, config));
        console.log(result);
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }

}

Authenticator.loginUser = async function (loginInformation) {
    try {
        let result = await axios.post("http://localhost:8080/getToken", loginInformation, config);
        console.log(result);
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }

}

Authenticator.registerUser = async function (registrationInformation) {
    try {
        let result = await axios.post("http://localhost:8080/createUser", registrationInformation, config);
        console.log(result);
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }

}

export default Authenticator;