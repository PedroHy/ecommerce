import IProduct from "@/interfaces/IProduct";
import AliceCarousel from "react-alice-carousel";
import ProductCard from "../ProductCard";


export default function Reels({products}:{products?:Array<IProduct>}){
    const items:Array<React.ReactNode> = []
    
    const responsive = {
        0: {
            items: 1
        },
        365: {
            items: 1.5
        },
        400:{
            items: 2
        },
        768: {
            items: 4
        },
        1024: {
            items: 5,
        },
        1240:{
            items: 6
        },
        1400:{
            items: 6
        }
    }

    if(products) products.map((product)=>{
        items.push(<ProductCard key={product._id} product={product}/>)
    })

    return(
        <div className='products mx-4 sm:mx-6 md:mx-8 lg:mx-24'>
            <h2 className='text-4xl my-6'>Favoritos:</h2>
            <div className='flex gap-4 justify-around'>
                <AliceCarousel mouseTracking items={items} responsive={responsive} disableButtonsControls />
            </div>
        </div>
    )
}