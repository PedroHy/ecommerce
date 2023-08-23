import Link from "next/link";
import { Form } from "@/components/general/Form";
import { useState } from "react";
import { signIn } from "next-auth/react";

interface IEvent {

    target: {
        value: string
    }

}

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const doLogin = async () => {
        const result = await signIn("credentials", { email, password, redirect: true, callbackUrl: '/' })
    }

    return (
        <div className="flex justify-center items-center bg-blue-600 h-screen">
            <div className="flex">
                <Form.Root>
                    <Form.Title>Login</Form.Title>
                    <Form.Inputs>
                        <Form.Input placeholder="E-mail" type="text" onChange={(e: IEvent) => { setEmail(e.target.value) }} />
                        <Form.Input placeholder="Senha" type="password" onChange={(e: IEvent) => { setPassword(e.target.value) }} />
                    </Form.Inputs>
                    <Form.Button onClick={doLogin}>Entrar</Form.Button>
                    <Form.Links>
                        <Link href='auth/register' className="text-sm text-blue-500">Criar uma conta</Link>
                        <Link href='/' className="text-sm text-blue-500">Esqueçi minha senha</Link>
                    </Form.Links>
                </Form.Root>
            </div>
        </div>
    )
}