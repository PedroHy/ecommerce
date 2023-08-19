import Link from 'next/link'
import { Heart, ShoppingCart , UserCircle } from '@phosphor-icons/react'

export default function Icons() {
    return (
        <div className="hidden buttons items-center md:flex">
            <Link href='/favorites' className='relative'>
                <Heart size={32} className='text-white ml-8 cursor-pointer' />
            </Link>
            <Link href='/cart' className='relative'>
                <ShoppingCart size={32} className='text-white ml-4 cursor-pointer' />
            </Link>
            <Link href='/user' className='relative'>
                <UserCircle size={34} weight="fill" className='text-white ml-4 cursor-pointer' />
            </Link>
        </div>
    )
}