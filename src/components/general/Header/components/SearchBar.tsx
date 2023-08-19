import { MagnifyingGlass } from '@phosphor-icons/react'

export default function SearchBar() {
    return (
        <div className='hidden items-center md:flex relative'>
            <input type="text" placeholder="Pesquisar..." className="h-10 w-96 box-border p-2 text-md rounded focus:outline-none"></input>
            <button className='h-10 p-2 absolute text-zinc-500 right-0'> <MagnifyingGlass size={24} weight="bold" /> </button>
        </div>
    )
}