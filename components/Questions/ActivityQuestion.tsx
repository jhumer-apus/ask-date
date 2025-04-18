import { Dispatch, SetStateAction } from "react";
import Card from "../Card";
import { AnswerType } from "@/types";

interface Props {
    setCurrentQuestion: Dispatch<SetStateAction<string>>
    setAnswer: Dispatch<SetStateAction<AnswerType>>
}

type ActivityType = {
    title:string;
    imagePath:string;
}

export default function ActivityQuestion(props:Props) {

    const { setCurrentQuestion, setAnswer } = props

    const activities:ActivityType[] = [
        {
            imagePath: "images/activities/bowling.png",
            title: "Bowling"
        },
        {
            imagePath: "images/activities/badminton.png",
            title: "Badminton"
        },
        {
            imagePath: "images/activities/archery.png",
            title: "Archery"
        },
        {
            imagePath: "images/activities/jogging.png",
            title: "Running"
        }
    ]

    const handleClick = (activity:ActivityType) => {
        setAnswer((curr:AnswerType) => ({
            ...curr,
            activity: activity.title
        }))
        setCurrentQuestion(() => "drinks")
    }
    return(
        <div className="w-fit p-8 mx-auto mt-10 ">
            <p className="text-2xl font-bold text-slate-200">ENGAGING ACTIVITIES🤩</p>
            <p className="text-xl text-2xl mt-10 font-semibold">Please Pick An Activity😁</p>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-8 w-fit mx-auto mt-4">
                {activities.map((activity, index:number) => (
                    <div key={index} onClick={() => handleClick(activity)}>
                        <Card 
                            imagePath={activity.imagePath} 
                            title={activity.title}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}