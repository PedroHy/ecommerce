interface IGrid{
    children: React.ReactNode
}

export default function Grid({children}:IGrid){
    return(
        <div className="grid w-max gap-6 my-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">{children}</div>
    )
}