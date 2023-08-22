import IProduct from "@/interfaces/IProduct";
import { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import FavoriteButton from "../FavoriteButton";

export default function ProductImageGrid({product}:{product:IProduct}) {

    const [mainPicture, setMainPicture] = useState(`http://localhost:3000/picture/${product.pictures[0]}`)

    const selectMainPicture = (e: React.MouseEvent) => {
        const target  = e.target as HTMLImageElement
        if (target) setMainPicture(target.src);
    }
    const items = product.pictures.map(img => {
        const url = `http://localhost:3000/picture/${img}`
        return <img onClick={selectMainPicture} src={url} key={img.name} className={mainPicture == url ? ' h-24 object-contain border-2 border-blue-500/50' : 'h-24 object-contain'}></img>
    })

    const totItems = product.pictures.length;
    const responsive = {
        0: {
            items: totItems,
        }
    }

    return (
        <div className="group relative w-96 h-min">
            <img className="main row-span-1 col-span-4 h-64 p-1 object-cover w-full mb-1" src={mainPicture}></img>
            <FavoriteButton size={32} />
            <AliceCarousel items={items} responsive={responsive} autoWidth={true} disableDotsControls mouseTracking disableButtonsControls ></AliceCarousel>
        </div>
    )
}