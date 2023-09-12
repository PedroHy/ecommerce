import Header from "@/components/general/Header"
import { checkHasHeader } from "@/functions/check-has-header";
import { useRouter } from "next/router";

import { useSession, signIn } from "next-auth/react"

export default function ProtectedMain({ children }: { children: React.ReactNode }) {
    const pathName = useRouter();
    const route = pathName.route;
    const hasHeader = checkHasHeader(route);

    const { data: session } = useSession()

    if(session){
        return (
            <>
                {hasHeader && <Header />}
                {children}
            </>
        )
    }
    signIn()
}