import { Basket, Bell, House, MagnifyingGlass, Storefront, UserCircle } from "@phosphor-icons/react"
import SidebarOption from "./components/SidebarOption"


export default function Sidebar(){
    
    return (
        <div className="fixed flex w-full h-screen top-0">
            <div className="w-3/4 h-full bg-zinc-800 flex flex-col justify-between">
                <div>
                    <SidebarOption icon={<House size={28} className='mx-8' />} text="Inicio" path="/"/>
                    <SidebarOption icon={<MagnifyingGlass size={28} className='mx-8' />} text="Pesquisar" path="search"/>
                    <SidebarOption icon={<Basket size={28} className='mx-8' />} text="Carrinho" path="cart"/>
                    <SidebarOption icon={<Bell size={28} className='mx-8' />} text="Favoritos" path="favorites"/>
                    <SidebarOption icon={<Storefront size={28} className='mx-8' />} text="Categorias" path="categories"/>
                </div>
                <SidebarOption icon={<UserCircle size={32} weight="fill" className='text-white mx-8' />} text="Conta" path="account"/>
            </div>
        </div>
    )
}