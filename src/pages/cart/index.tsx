import { ShoppingCartSimple } from "@phosphor-icons/react";
import EmptyPage from "@/components/general/EmptyPage";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import IProduct from "@/interfaces/IProduct";
import List from "@/components/general/List";
import ListItem from "@/components/general/List/components/ListItem";

export default function Cart() {

    const session = useSession()
    const [products, setProducts] = useState([])

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
        <div className="bg-zinc-100 h-screen pt-4">
            <List products={products} />
        </div>
    )
}