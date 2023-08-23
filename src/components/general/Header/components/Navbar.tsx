import Link from 'next/link'
import useSWR from 'swr'

import ICategory  from '@/interfaces/ICategory'
import { api } from '@/services/api'

const fetcher = () => api.get('/category').then((res) => res.data)

export default function Navbar() {
    const { data, error } = useSWR('categories', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    return (
        <nav className='bg-blue-600 py-2 px-24 hidden items-center gap-4 text-white md:flex flex-wrap'>
            {data.map((category: ICategory) => {
                return <Link className='no-underline text-white text-sm ' key={category._id} href={`/categories/${category._id}`}>{category.name}</Link>
            })}
        </nav>
    )
}