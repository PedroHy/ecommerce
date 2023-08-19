interface IFormLinks{
    children: React.ReactNode
}

export default function FormLinks({children}:IFormLinks){
    return(
        <div className="flex flex-col mt-4 gap-1 text-center">{children}</div>
    )
}