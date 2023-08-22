import ICategory from "@/interfaces/ICategory";
import Link from "next/link";
import { useState } from "react"
import useSWR from "swr"

const fetcher = () => fetch('http://localhost:3000/category').then((res) => res.json())

interface ISidebarOption {
    icon: React.ReactNode,
    text: string,
    path: string
}

export default function SidebarOption({ icon, text, path }: ISidebarOption) {

    const [categories, setCategories] = useState(false)
    const showCategories = () => setCategories(!categories)
    const { data } = useSWR('categories', fetcher)

    const isCategory = text.toLowerCase() == "categorias"

    if (isCategory) {
        return (
            <div>
                <div onClick={showCategories} className='flex items-center text-white h-14 bg-zinc-800 cursor-pointer ease-in-out duration-300 hover:bg-zinc-700'> {icon} {text}</div>
                {categories &&
                    <div>
                        {data.map((category: ICategory) => {
                            return <Link className='no-underline text-white text-md block mx-14 my-6' key={category._id} href={`/categories/${category._id}`}>{category.name}</Link>
                        })}
                    </div>
                }
            </div>
        )
    }

    return (
        <Link href={path} className=' no-underline flex  items-center text-white h-14 bg-zinc-800 cursor-pointer ease-in-out duration-300 hover:bg-zinc-700'> {icon} {text}</Link>
    )

}
