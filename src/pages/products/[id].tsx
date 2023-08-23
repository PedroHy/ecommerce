import ProductImageGrid from "@/components/general/ProductImageGrid"
import IContext from "@/interfaces/IContext"
import IProduct from "@/interfaces/IProduct"

import { api } from "@/services/api"

export async function getStaticProps(context: IContext) {
    const { params } = context
    const response = await api.get(`product/${params.id}`)
    const product = response.data

    if (!product) {
        return {
          notFound: true,
        }
    }

    return {
        props: {
            product
        }
    }
}

export async function getStaticPaths() {
    const response = await api.get(`/product/`)
    const products = response.data
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

export default function Product({ product }: { product: IProduct }) {
    return (
        <div className="flex flex-col mt-2 md:mt-3 mx-2 md:mx-24 pt-6">
            <div className="flex rounded bg-white flex-wrap justify-center gap-2">
                <ProductImageGrid product={product} />
                <div className="relative w-96 p-8 flex flex-col gap-4">
                    <h2 className="text-3xl">{product.name}</h2>
                    <div>
                        <div className="flex items-center"><span className="text-sm ">R$</span><span className="text-4xl">{("" + product.price.toFixed(2)).replace('.', ',')}</span></div>
                        <span className="text-sm">Em até {product.installment}x sem juros</span>
                    </div>
                    <div className="flex gap-2">
                        <div className="h-8 w-24 bg-blue-400 text-white flex justify-center items-center text-sm">Comprar</div>
                        <div className="cursor-pointer h-8 w-40 bg-zinc-700 text-white flex justify-center items-center text-sm">Adicionar ao carrinho</div>
                    </div>
                    <div>
                        <span className="font-bold text-xl">Descrição:</span>
                        <div className="p-2 bg-zinc-100 rounded">
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}