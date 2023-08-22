import Link from 'next/link';

import IProduct from '@/interfaces/IProduct';
import FavoriteButton from '../FavoriteButton';

export default function ProductCard({product}:{product:IProduct}){
    const url = `http://localhost:3000/picture/${product.pictures[0]}`

    const price = ("" + product.price.toFixed(2)).replace('.', ',');
    const [real, centavo] = price.split(',')
    return(
        <div className='group w-44 bg-white mb-4 cursor-pointer shadow-md h-80'>
            <Link className='no-underline text-black relative' href={`/products/${product._id}`}>
                <FavoriteButton size={24} />
                <img className="h-40 p-0.5 object-contain w-full" src={url}></img>
                <div className="p-2 flex flex-col gap-2 border-t">
                    <div>
                        <div className="flex"><span className="text-2xl font-normal">R$</span><span className="text-2xl ">{real}</span><span className="text-xs pt-1.5 px-0 .5">{centavo}</span></div>
                        <span className="text-sm text-cyan-500  font-medium">Em até {product.installment}x sem juros</span>
                    </div>
                    <span className="text-sm text-zinc-800 overflow-hidden text-ellipsis line-clamp-2">{product.name}</span>
                </div>
            </Link>
        </div>
    )
}