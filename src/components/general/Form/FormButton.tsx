import { ButtonHTMLAttributes } from "react"

interface IFormButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string
}

export default function FormButton({children}:IFormButton){
    return(
        <button className="bg-blue-500 rounded-full p-2 w-24 text-white mt-4">{children}</button>
    )
}