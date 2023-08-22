import Icons from "./components/Icons";
import LogoContainer from "./components/LogoContainer";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

export default function Header(){
    return(
        <header className='fixed flex flex-col justify-center bg-zinc-800 w-full top-0 shadow-md '>
             <div className='h-20 flex box-border items-center justify-center md:justify-between lg:mx-24'>
                <LogoContainer />
                <SearchBar />
                <Icons />
             </div>
             <Navbar />
        </header>
    )
}