interface Props {
    imagePath:string
}

export default function Card(props:Props){

    const { imagePath } = props
    return (
        <div className="w-56 h-56 overflow-hidden rounded-lg ">
            <img src={imagePath}/>
        </div>
    )
}