import { createContext } from "react";

export const AuthContext = createContext({});

export function AuthProvider({ children }:{children: React.ReactNode}){
    const isAuthenticate = false;

    return(
        <AuthContext.Provider value={{ isAuthenticate }}>
            {children}
        </AuthContext.Provider>
    )
}