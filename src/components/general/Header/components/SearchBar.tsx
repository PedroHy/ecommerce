'use client'

import IProduct from '@/interfaces/IProduct';
import { api } from '@/services/api';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

export default function SearchBar() {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState<Array<IProduct>>([]);
    const [productsFiltred, setProductsFiltred] = useState<Array<IProduct>>([])


    useEffect(() => {
        api.get('/product').then((res) => {
            setProducts(res.data)
        })
    })

    useEffect(() => {
        const searchFormated = search.toLowerCase();
        setProductsFiltred(products.filter((product: IProduct) => {
            return product.name.toLowerCase().includes(searchFormated)
        }))

        if (search == '') {
            setProductsFiltred([])
        }
    }, [search])

    return (
        <div className='flex flex-col relative'>
            <div className={productsFiltred.length==0?'hidden':'z-50 bg-zinc-100 w-96 absolute top-9 flex flex-col pt-1'}>
                {productsFiltred.slice().map(product => {
                    return (
                    <a href={`/products/${product._id}`}
                        className='p-1.5 no-underline text-black border-b-2 hover:bg-zinc-200 w-full overflow-hidden text-ellipsis line-clamp-1' key={product._id}>
                        {product.name}
                    </a>
                    )
                })}
            </div>
            <div className='hidden items-center md:flex relative'>
                <input type="text" placeholder="Pesquisar..." value={search} onChange={(e) => { setSearch(e.target.value) }} className="h-10 w-96 box-border p-2 text-md rounded focus:outline-none"></input>
                <a href={`/results/?search=${search}`} className='h-10 p-2 absolute text-zinc-500 right-0'> <MagnifyingGlass size={24} weight="bold" /> </a>
            </div>
        </div>
    )
}

//href={{ pathname: '/search', query: { keyword: 'this way' } }}
//href={`/search/?search=${search}`}