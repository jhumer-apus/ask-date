import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props {
    setPlaySongs: Dispatch<SetStateAction<boolean>>;
    setCurrentQuestion: Dispatch<SetStateAction<string>>
}
export default function PermissionQuestion(props:Props) {
    const { setPlaySongs, setCurrentQuestion } = props

    const [position, setPosition] = useState<any>(
        {
            width: 0,
            height: 0,
        }
    )
    const [isHovered, setIsHovered] = useState(false);
    
    const onMouseEnter = () => {
        setIsHovered(true)
        setPosition((curr:any) => (
            {
                top: Math.random() * (window.innerHeight-150),
                left: Math.random() * (window.innerWidth-150),

            }
        ))

    }

    const handleYes = () => {
        setCurrentQuestion(() => "activities")
        setPlaySongs(() => true)
    }
    return (
        <div className="mx-auto w-fit mt-10">
            <img src="gif/cat_asking.gif"/>
            <p className="text-center text-2xl font-bold p-2 rounded-lg my-2">Can I take you out for a Casual Date?</p>
            <div className="mx-auto w-56 mt-10">
                <button onClick={() => handleYes()}>
                    Yes
                </button>
                <button 
                    className={`absolute ml-8 ${isHovered? `transition-all duration-300 absolute`: "relative"}`}
                    onMouseEnter={onMouseEnter}
                    style={
                        {
                            top: position.top,
                            left: position.left
                        }
                    }
                >
                    No
                </button>
            </div>
        </div>
    )
}