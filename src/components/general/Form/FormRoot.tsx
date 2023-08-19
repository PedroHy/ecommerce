interface IFormRoot{
    children: React.ReactNode
}

export default function FormRoot({children}:IFormRoot){
    return(
        <div className="py-12 px-20 bg-white rounded flex flex-col items-center p-4">{children}</div>
    )
}