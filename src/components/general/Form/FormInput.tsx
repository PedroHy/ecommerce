import { Eye } from "@phosphor-icons/react";
import { InputHTMLAttributes, useState } from "react"

interface IFormInput{
    placeholder?: string,
    type: string,
    id?: string
}

export default function FormInput({placeholder, type, id}:IFormInput){
    
    const [showPassword, setShowPassword] = useState(false);

    const isPass = type === 'password'

    return(
        <div>
            <input type={showPassword?'text':type} id={id} placeholder={placeholder} className="py-2 border-b-2 touch-none w-52 focus:outline-none"></input>
            {isPass && <Eye className={!showPassword?'absolute right-0 bottom-3 text-gray-400':'absolute right-0 bottom-3 text-blue-400'} onClick={()=>setShowPassword(!showPassword)} size={18} weight="bold" />}
        </div>
    )
}