import IProduct from "@/interfaces/IProduct";
import ListItem from "./components/ListItem";
import { IListItem } from "@/interfaces/IListItem";

export default function List({ products }: { products: Array<IListItem> }) {
    return (

        <div>
            <h1 className='mb-6 font-bold text-2xl'>Seu Carrinho:</h1>
            <div className='h-80 flex flex-col gap-2 p-2 border-box overflow-y-scroll'>
                {
                    products.map(({ product }: { product: IProduct }) => {
                        return <ListItem key={product._id} product={product} />
                    })
                }
            </div>
        </div>

    )
}