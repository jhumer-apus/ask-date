import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props {
    setPlaySongs: Dispatch<SetStateAction<boolean>>;
    setCurrentQuestion: Dispatch<SetStateAction<string>>
}

interface PositionType {
    top: number;
    left: number
}
// interface PositionType {
//     width: number;
//     height: number
// }
export default function PermissionQuestion(props:Props) {
    const { setPlaySongs, setCurrentQuestion } = props
    const [isHovered, setIsHovered] = useState(false);
    const [width , setWidth] = useState(0)

    const [position, setPosition] = useState<PositionType>(
        {
            top: 0,
            left: 0,
        }
    )

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize); // Listen for resize events
        return () => window.removeEventListener('resize', handleResize); // Clean up listener on component unmount
    }, []);

    useEffect(() => {
        setWidth(window.innerWidth);
    },[])
    
    const onMouseEnter = () => {
        setIsHovered(true)
        setPosition(() => (
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
            <div className="mx-auto w-84 mt-10">
                <button onClick={() => handleYes()}>
                    Yes
                </button>
                <button 
                    className={`absolute ml-8 ${isHovered? `absolute transition-all duration-300 `: "relative"}`}
                    onClick={() => handleYes()}
                    onMouseEnter={onMouseEnter}
                    style={
                        {
                            top: position.top,
                            left: position.left
                        }
                    }
                >
                    {width > 640 ? "No": "OO NAMAN🤩"}
                </button>
            </div>
        </div>
    )
}