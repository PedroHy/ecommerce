interface IFormTitle{
    children: React.ReactNode
}

export default function FormTitle({children}:IFormTitle){
    return(
        <h1 className="text-xl font-bold mt-4 text-zinc-800">{children}</h1>
    )
}