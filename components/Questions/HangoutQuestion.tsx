import { Dispatch, SetStateAction } from "react";
import Card from "../Card";
import { AnswerType } from "@/types";

interface Props {
    setCurrentQuestion: Dispatch<SetStateAction<string>>
    setAnswer: Dispatch<SetStateAction<AnswerType>>
}

type HangoutType = {
    title:string;
    imagePath:string;
}

export default function HangoutQuestion(props:Props) {

    const { setCurrentQuestion, setAnswer } = props

    const hangouts:HangoutType[] = [
        {
            imagePath: "images/hangouts/park.png",
            title: "Park"
        },
        {
            imagePath: "images/hangouts/cinema.png",
            title: "Cinema"
        },
        {
            imagePath: "images/hangouts/beach.png",
            title: "Beach"
        },
    ]

    const handleClick = (hangout:HangoutType) => {
        setAnswer((curr:AnswerType) => ({
            ...curr,
            hangout: hangout.title
        }))
        setCurrentQuestion(() => "schedule")
    }
    return(
        <div className="w-fit p-8 mx-auto mt-10 ">
            <p className="text-2xl font-bold text-slate-200">Chillin Time🤩</p>
            <p className="text-xl text-2xl mt-10 font-semibold">Please Pick A Place For a Hangout😁</p>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-8 w-fit mx-auto mt-4">
                {hangouts.map((hangout, index:number) => (
                    <div key={index} onClick={() => handleClick(hangout)}>
                        <Card 
                            imagePath={hangout.imagePath} 
                            title={hangout.title}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}