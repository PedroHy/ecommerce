interface IFormInputs{
    children: React.ReactNode
}

export default function FormInputs({children}:IFormInputs){
    return(
        <div className="flex flex-col gap-4 justify-center mt-6 relative">{children}</div>
    )
}