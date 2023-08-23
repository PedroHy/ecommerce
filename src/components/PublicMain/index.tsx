import Header from "@/components/general/Header"
import { checkHasHeader } from "@/functions/check-has-header";
import { useRouter } from "next/router";
import Sidebar from "../general/Sidebar";

export default function PublicMain({children}:{children: React.ReactNode}){
    
    const pathName = useRouter();
    const route = pathName.route;
    const hasHeader = checkHasHeader(route);
    
    return(
        <>
            {hasHeader&&<Header />}
            {children}
        </>
    )
}