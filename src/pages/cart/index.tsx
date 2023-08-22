import { ShoppingCartSimple } from "@phosphor-icons/react";
import EmptyPage from "@/components/general/EmptyPage";

export default function Cart() {
    return (
        <EmptyPage icon={<ShoppingCartSimple size={120} className='text-zinc-400' weight="fill" />} text="Seu carrinho está vazio" />
    )
}