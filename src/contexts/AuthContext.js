import { createContext } from "react";
// import { googleAuthService, loginService } from "../services/AuthService";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(true);
    // const [user, setUser] = useState(null);

    // const login = async (credentials) => {
    //     // setUser("User")
    //     // const user = await loginService(credentials.email, credentials.password);        
    // }

    // const logout = async () => {
    //     console.log("Logeeg out");
    // }

    // const register = async (credentials) => {
    //     console.log("Register");
         
    // };

    // const googleAuthSignin = async (idToken) => {
    //     const user = await googleAuthService(idToken)
    //     console.log(user);
        
    // }

    // // useEffect(() => {
    // //     login({ email: "kingsley995mr@gmail.com", password: "pass1A@12345" });
    // // })

    // return (
    //     <AuthContext.Provider value={{ isLoggedIn, user, login, logout, register, googleAuthSignin }}>
    //       {children}
    //     </AuthContext.Provider>
    // );
    return (
        <AuthContext.Provider value={{}}>
          {children}
        </AuthContext.Provider>
    );
}