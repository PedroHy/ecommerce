import IContext from "@/interfaces/IContext"
import IProduct from "@/interfaces/IProduct"

export async function getStaticProps(context: IContext) {
    const { params } = context
    const data = await fetch(`http://localhost:3000/product/${params.id}`)
    const product = await data.json()

    return {
        props: {
            product
        }
    }
}

export async function getStaticPaths() {
    const data = await fetch(`http://localhost:3000/product/`)
    const products = await data.json()
    const paths = products.map((product: IProduct) => {
        return {
            params: {
                id: `${product._id}`
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export default function Product() {
    return(
        <h1>Product</h1>
    )
}