"use client"

import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { apiAuth } from "../api"

const useAxiosAuth = () =>{
    const {data:session} = useSession()

    useEffect(()=>{
        const requestIntercept = apiAuth.interceptors.request.use((config)=>{
            if(!config.headers["Authorization"]){
                config.headers["Authorization"] = `Bearer ${session?.user.accessToken}`;
            }
            return config;
        })
        return ()=>{
            apiAuth.interceptors.request.eject(requestIntercept)
        }
    }, [session])

    return apiAuth;
}

export default useAxiosAuth