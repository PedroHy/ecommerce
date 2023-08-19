import Link from 'next/link'

export default function LogoContainer() {
    return (
        <div className='m-4'>
            <Link href='/'>
                <span className='text-xl text-white no-underline'>
                    logo
                </span>
            </Link>
        </div>
    )
}