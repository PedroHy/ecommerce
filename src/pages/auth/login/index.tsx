import Link from "next/link";
import { Form } from "@/components/general/Form";

export default function Login() {

    const doLogin = async () => {
        
    }

    return (
        <div className="flex justify-center items-center bg-blue-600 h-screen">
            <div className="flex">
                <Form.Root>
                    <Form.Title>Login</Form.Title>
                    <Form.Inputs>
                        <Form.Input placeholder="E-mail" type="text" />
                        <Form.Input placeholder="Senha" type="password" />
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