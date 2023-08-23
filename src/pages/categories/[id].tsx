import IProduct from "@/interfaces/IProduct";
import ICategory from "@/interfaces/ICategory";
import IContext from "@/interfaces/IContext";
import Grid from "@/components/general/Grid";
import ProductCard from "@/components/general/ProductCard";
import EmptyPage from "@/components/general/EmptyPage";

import { api } from "@/services/api";

export async function getStaticProps(context: IContext) {
    try{
        const { params } = context
        const response = await api.get(`/product/${params.id}`);
        const products = response.data
    
        return {
            props: {
                products
            }
        }
    }catch{
        return {
            notFound: true,
          }
    }

}

export async function getStaticPaths() {
    const response = await api.get(`/category/`)
    const categories = response.data

    const paths = categories.map((category: ICategory) => {
        return {
            params: {
                id: `${category._id}`
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export default function Category({ products }: { products: Array<IProduct> }) {
    if (!products) {
        //TODO
        return (
            <EmptyPage text="Parece que não há produtos nessa categoria" />
        )
    }
    return (
        <div className="w-max mt-2 md:mt-2 mx-auto">
            <h1 className="text-3xl font-semibold">{products[0].category.name}</h1>
            <Grid>
                {products.map((product) => {
                    return <ProductCard key={product._id} product={product} />
                })}
            </Grid>
        </div>
    )
}