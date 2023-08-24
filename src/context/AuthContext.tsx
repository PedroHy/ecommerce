import { SessionProvider } from "next-auth/react"
import React, {ReactNode} from "react";

export function AuthProvider({ children, session }:{children: ReactNode, session?:any}){
    return(
        <SessionProvider>
            { children }
        </SessionProvider>
    )
}