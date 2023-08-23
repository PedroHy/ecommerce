import { ButtonHTMLAttributes } from "react"

interface IFormButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string,
    onClick: any
}

export default function FormButton({children, onClick}:IFormButton){
    return(
        <button onClick={onClick} className="bg-blue-500 rounded-full p-2 w-24 text-white mt-4">{children}</button>
    )
}