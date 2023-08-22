interface IEmptyPage{
    icon?: React.ReactNode,
    text: string
}

export default function EmptyPage({icon, text}:IEmptyPage){

    return(
        <div className="mt-32 mx-auto rounded w-11/12 md:w-4/5 h-128 max-w-128 bg-white p-6 md:p-12 border-box flex flex-col justify-center">
            <div className='h-64 flex flex-col gap-2 p-2 border-box items-center justify-center'>
                {icon}
                <span className='text-md font-bold text-zinc-400'>{text}</span>
            </div>
        </div>
    )
}