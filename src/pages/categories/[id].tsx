import IProduct from "@/interfaces/IProduct";
import ICategory from "@/interfaces/ICategory";
import IContext from "@/interfaces/IContext";
import Grid from "@/components/general/Grid";
import ProductCard from "@/components/general/ProductCard";
import Link from "next/link";
import Image from "next/image";

export async function getStaticProps(context: IContext) {

    const { params } = context
    const data = await fetch(`http://localhost:3000/product/${params.id}`);
    const products = await data.json()

    return {
        props: {
            products
        }
    }

}

export async function getStaticPaths() {
    const data = await fetch(`http://localhost:3000/category/`)
    const categories = await data.json()

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
    if(!products){
        //TODO
        return(
            <div className="w-full h-screen flex flex-col items-center justify-center">
                <Image src='/404 Error-rafiki.svg' width={400} height={400} alt="page not found"></Image>
                <h1 className="text-blue-500 text-3xl font-bold">Parece que ainda não há produtos nessa categoria</h1>
                <Link className="pt-6 text-blue-400 underline" href='/'>Ir para página principal</Link>
        </div>
        )
    }
    return (
        <div className="w-max mt-28 md:mt-32 mx-auto">
            <h1 className="text-3xl font-semibold">{products[0].category.name}</h1>
            <Grid>
                {products.map((product) => {
                    return <ProductCard key={product._id} product={product} />
                })}
            </Grid>
        </div>
    )
}