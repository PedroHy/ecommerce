import Link from "next/link";
import Image from "next/image";

export default function NotFound(){
    return(
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <Image src='/404 Error-rafiki.svg' width={400} height={400} alt="page not found"></Image>
            <h1 className="text-blue-500 text-3xl font-bold">Parece que essa página não existe</h1>
            <Link className="pt-6 text-blue-400 underline" href='/'>Ir para página principal</Link>
        </div>
    )
}