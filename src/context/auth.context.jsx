
import { createContext, useEffect, useState } from "react";
import authServices from "../services/auth.services";

const AuthContext = createContext();

function AuthProviderWrapper(props) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    const authenticateUser = () => {

        setIsLoading(true)

        const token = localStorage.getItem('authToken');

        if (token) {
            authServices
                .verifyUser(token)
                .then(({ data }) => {
                    setUser(data);
                    setIsLoggedIn(true);
                    setIsLoading(false)
                })
                .catch(err => logout());
        }
    };

    const storeToken = (tokenValue) => {
        localStorage.setItem('authToken', tokenValue);
    };

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
        setIsLoading(false)
        localStorage.removeItem('authToken');
    };

    useEffect(() => {
        authenticateUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, isLoggedIn, storeToken, authenticateUser, logout, isLoading }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProviderWrapper };

