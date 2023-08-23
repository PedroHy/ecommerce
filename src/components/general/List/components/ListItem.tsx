import IProduct from "@/interfaces/IProduct";
import { MinusCircle, PlusCircle, Trash } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";

export default function ListItem({ product }: { product: IProduct }) {

    const [quant, setQuant] = useState(1);
    const [subTotal, setSubTotal] = useState(product.price);

    const incrementQtd = () => {
        setQuant(quant + 1);
        setSubTotal(quant * Number(subTotal));
    }

    const decrementQtd = () => {
        setQuant(quant - 1);
        setSubTotal(quant * Number(subTotal));
    }

    const removeFromCart = () => {

    }

    const url = `http://localhost:3000/picture/${product.pictures[0]}`;

    return (
        <div className="flex gap-4 items-center rounded bg-zinc-100 p-2 shadow-md justify-between">
            <div className="flex gap-2 items-center w-80">
                <div className="flex flex-col-reverse md:flex-row items-center gap-1">
                    {quant == 1 ? <MinusCircle className="text-zinc-400" size={16} weight="fill" /> : <MinusCircle className="cursor-pointer" onClick={decrementQtd} size={16} weight="fill" />}
                    <span className="text-md">{quant}</span>
                    <PlusCircle className="cursor-pointer" onClick={incrementQtd} size={16} weight="fill" />
                </div>
                <img src={url} className="w-12 h-12 object-cover"></img>
                <Link href={`/products/${product._id}`} className="no-underline text-black">{product.name}</Link>
            </div>
            <span className="hidden md:flex">{("R$" + subTotal.toFixed(2)).replace('.', ',')}</span>
            <Trash onClick={removeFromCart} size={24} className="cursor-pointer" />
        </div>
    )
}