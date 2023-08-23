import IProduct from "@/interfaces/IProduct";
import ListItem from "./components/ListItem";
import { IListItem } from "@/interfaces/IListItem";

export default function List({ products }:{products:Array<IListItem>}) {
    return (
        <div className="mx-auto rounded w-11/12 md:w-4/5 h-128 max-w-128 bg-white p-6 md:p-12 border-box flex flex-col justify-between">
            <div>
                <h1 className='mb-6 font-bold text-2xl'>Seu Carrinho:</h1>
                <div className='h-80 flex flex-col gap-2 p-2 border-box overflow-y-scroll'>
                    {
                        products.map(({ product }: { product: IProduct }) => {
                            console.log(product)
                            return <ListItem key={product._id} product={product} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}