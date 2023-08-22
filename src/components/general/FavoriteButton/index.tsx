import { Heart } from "@phosphor-icons/react";

export default function FavoriteButton({size}:{size:number}) {
    return (
        <div className="hidden group-hover:block absolute right-1 top-1 text-zinc-400 hover:text-cyan-500 bg-white/25 p-1 flex items-center justify-center rounded-full">
            <Heart size={size} />
        </div>
    )
}