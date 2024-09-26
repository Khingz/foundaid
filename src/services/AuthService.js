import axios from "axios";
import config from "../utils/config";


// const loginService = async (email, password) => {
//     try {
//         const response = await axios.post(config.API_URL + "login", {
//             email,
//             password
//         });
//         return response.data;
//     } catch (error) {
//         console.log(error);
//     }
// }

const googleAuthService = async (idToken) => {
    try {
        const response = await axios.post(config.API_URL + "google", {
            idToken
        });
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}


export {
    // loginService,
    googleAuthService
}