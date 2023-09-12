import Grid from "@/components/general/Grid"
import ProductCard from "@/components/general/ProductCard";
import IProduct from "@/interfaces/IProduct";
import { api } from "@/services/api";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function Search() {

    const { query } = useRouter()
    const { search } = query

    const [products, setProducts] = useState<Array<IProduct>>([]);
    const [productsFiltred, setProductsFiltred] = useState<Array<IProduct>>([])


    useEffect(() => {
        api.get('/product').then((res) => {
            setProducts(res.data)
        })
    }, [])

    useEffect(() => {
        if(search){
            const searchFormated = search.toString().toLowerCase()
            setProductsFiltred(products.filter((product: IProduct) => {
                return product.name.toLowerCase().includes(searchFormated)
            }))
        }
        if (search == '') {
            setProductsFiltred([])
        }
    }, [products])

    return (
        <div className="w-max mt-2 md:mt-1 mx-auto">
            <h1 className="text-3xl font-semibold my-12 text-zinc-600">Você pesquisou por "{search}"</h1>
            <Grid>
                {productsFiltred.map((product) => {
                    return <ProductCard key={product._id} product={product} />
                })}
            </Grid>
        </div>
    )
}