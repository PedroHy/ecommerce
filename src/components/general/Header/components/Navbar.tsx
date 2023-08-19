import Link from 'next/link'
import useSWR from 'swr'

import ICategory  from '@/interfaces/ICategory'

const fetcher = () => fetch('http://localhost:3000/category').then((res) => res.json())

export default function Navbar() {
    const { data, error } = useSWR('categories', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return (
        <nav className='bg-blue-600 h-8 px-24 hidden items-center gap-6 text-white md:flex'>
            {data.map((category: ICategory) => {
                return <Link className='no-underline text-white text-sm ' key={category._id} href={`/categories/${category._id}`}>{category.name}</Link>
            })}
        </nav>
    )
}