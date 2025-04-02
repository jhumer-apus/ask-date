interface Props {
    imagePath: string
    title: string
}

export default function Card(props:Props){

    const { imagePath, title } = props

    return (
        <div className="relative w-fit h-fit group shadow-2xl cursor-pointer">
            <img src={imagePath} className="h-56 w-56 transition-transform duration-300 transform group-hover:scale-110 rounded-lg"/>
            <p className="absolute whitespace-nowrap shadow-2xl bg-white text-slate-700 text-xl rounded-lg font-bold p-2 transform -translate-x-1/2 -translate-y-1/2 left-1/2">{title}</p>
        </div>
    )
}