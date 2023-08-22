import { Heart } from "@phosphor-icons/react";
import EmptyPage from "@/components/general/EmptyPage";

export default function Favorites() {
    return (
        <EmptyPage icon={<Heart size={120} className='text-zinc-400' weight="fill" />} text="Você não tem nenhum favorito ainda" />
    )
}