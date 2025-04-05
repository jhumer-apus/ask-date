import { Dispatch, SetStateAction, useState } from "react";
import Card from "../Card";
import { AnswerType } from "@/types";

interface Props {
    setCurrentQuestion: Dispatch<SetStateAction<string>>
    setAnswer: Dispatch<SetStateAction<AnswerType>>
}

type MealType = {
    title:string;
    imagePath:string;
}

export default function MealQuestion(props:Props) {

    const { setCurrentQuestion, setAnswer } = props
    const [selectedMeals, setSelectedMeals] = useState<string[]>([])
    const [error, setError] = useState<string>("")
    

    const meals:MealType[] = [
        {
            imagePath: "images/meals/pork.png",
            title: "Pork🤔"
        },
        {
            imagePath: "images/meals/chicken.png",
            title: "Chicken😏"
        },
        {
            imagePath: "images/meals/beef.png",
            title: "Beef😮"
        },
    ]

    const handleClick = () => {

        if(selectedMeals.length < 1) {
            setError(() => "Please select 1 or more type of meal you like")
            return
        }

        setAnswer((curr:AnswerType) => ({
            ...curr,
            meals: [...selectedMeals]
        }))
        setCurrentQuestion(() => "hangout")
    }

    const handleSelected = (title:string) => {
        if(selectedMeals.includes(title)) {
            setSelectedMeals((curr:string[]) => curr.filter((meal:string) => meal != title))
        } else {
            setSelectedMeals((curr:string[]) => [...curr,title])
        }
    }


    return(
        <div className="w-fit p-8 mx-auto mt-10 ">
            <p className="text-2xl font-bold text-slate-200">RECOVERY TIME🤩</p>
            <p className="text-xl text-2xl mt-10 font-semibold">Please Select A Meal You Like😁</p>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-8 w-fit mx-auto mt-4">
                {meals.map((meal, index:number) => (
                    <div key={index} onClick={() => handleSelected(meal.title)}>
                        <Card 
                            imagePath={meal.imagePath} 
                            title={meal.title}
                            className={selectedMeals.includes(meal.title) ? "border-green-500 border-8": ""}
                        />
                    </div>
                ))}
            </div>
            <div className="mt-20 w-fit m-auto">
                <button className="bg" onClick={() => handleClick()}>
                    Next
                </button>
            </div>
            <div className="text-3xl font-bold text-center mt-2">
                {error}
            </div>
        </div>
    )
}