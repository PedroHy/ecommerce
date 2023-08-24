'use client'

import { ShoppingCartSimple } from "@phosphor-icons/react";
import EmptyPage from "@/components/general/EmptyPage";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import List from "@/components/general/List";
import Link from "next/link";

export default function Cart() {

    const session = useSession()
    const [products, setProducts] = useState([])
    const [subtotal, setSubtotal] = useState(0)

    useEffect(() => {
        try {
            const res = fetch(`http://localhost:3000/cart/${session.data?.user.cart}`, {
                method: "Get",
                headers: {
                    authorization: `bearer ${session.data?.user.accessToken}`
                }
            }).then(res => {
                res.json().then((data) => {
                    setProducts(data.cart.products);
                    setSubtotal(data.cart.subtotal)
                })
            })
        } catch (err) {
            console.log(err)
        }
    }, [])

    if (products.length == 0) {
        return (
            <EmptyPage icon={<ShoppingCartSimple size={120} className='text-zinc-400' weight="fill" />} text="Seu carrinho está vazio" />
        )
    }

    return (
        <div>
            <div className="bg-zinc-100 h-screen pt-4 relative">
                <div className="mx-auto rounded w-11/12 md:w-4/5 h-128 max-w-128 bg-white p-6 md:p-12 border-box flex flex-col justify-between">
                    <List products={products} />
                    <div className='flex justify-between flex-wrap gap-4 pt-4'>
                        <div className='w-40 '> <span className='font-bold'>Subtotal:</span> <span>{'R$' + subtotal.toFixed(2).replace('.', ',')}</span></div>
                        <Link href='/' className='w-28 h-8 bg-blue-500 text-white no-underline flex justify-center items-center text-sm'>Continuar</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}