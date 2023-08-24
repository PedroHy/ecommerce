"use client"

import { CaretRight } from "@phosphor-icons/react"
import { signOut, useSession } from "next-auth/react"

export default function User() {

    const { data:session } = useSession();

    return (
        <div className="bg-zinc-100 h-screen box-border	">
            <div className='w-11/12 flex gap-2 p-2 border-box mx-auto box-border'>
                <div className="w-96 h-full flex flex-col bg-white items-center p-2 box-border	">
                    <div className="img rounded-full h-48 w-48 bg-zinc-100"></div>
                    <span className="text-3xl font-semibold text-center p-4">{session?.user?.name}</span>
                    <div className="flex flex-col w-72">
                        <div className="p-4 border-t font-semibold easy-in-out hover:bg-zinc-100 flex items-center justify-between cursor-pointer">Conta <CaretRight weight="bold" size={16} /></div>
                        <div className="p-4 border-t font-semibold easy-in-out hover:bg-zinc-100 flex items-center justify-between cursor-pointer">Minhas compras <CaretRight weight="bold" size={16} /></div>
                        <div className="p-4 border-t font-semibold easy-in-out hover:bg-zinc-100 flex items-center justify-between cursor-pointer">Termos de uso <CaretRight weight="bold" size={16} /></div>
                        <div className="p-4 border-t font-semibold easy-in-out hover:bg-zinc-100 flex items-center justify-between cursor-pointer">Ajuda <CaretRight weight="bold" size={16} /></div>
                    </div>
                    <button onClick={() => signOut()} className="text-red-500 text-md p-4 cursor-pointer">Sair da conta</button>
                </div>
                <div className="w-full bg-white">
                    <span>container</span>
                </div>
            </div>
        </div>
    )
}