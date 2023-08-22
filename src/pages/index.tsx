import Reels from "@/components/general/Reels"
import Slider from "@/components/general/Slider"
import IProduct from "@/interfaces/IProduct"

import 'react-alice-carousel/lib/alice-carousel.css';

import { api } from "@/services/api";

export async function getStaticProps(){
  const response = await api.get('/product/favorites')
  const products = response.data
  return {props:{products}}
}

export default function Home({products}:{products:Array<IProduct>}) {
  return (
    <>
      <main>
        <Slider />
        <Reels products={products} />
      </main>
    </>
  )
}
