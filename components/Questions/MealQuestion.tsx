import { Dispatch, SetStateAction, useState } from "react";
import Card from "../Card";
import Checkbox from "../Checkbox";

interface Props {
    setCurrentQuestion: Dispatch<SetStateAction<string>>
    setAnswer: Dispatch<SetStateAction<any>>
}

type MealType = {
    title:string;
    imagePath:string;
}

export default function MealQuestion(props:Props) {

    const { setCurrentQuestion, setAnswer } = props
    const [selectedMeals, setSelectedMeals] = useState<any[]>([])
    

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
        setAnswer((curr:any) => ({
            meals: [...selectedMeals]
        }))
        setCurrentQuestion(() => "schedule")
    }

    const handleSelected = (title:string) => {
        if(selectedMeals.includes(title)) {
            setSelectedMeals((curr:any) => curr.filter((meal:string) => meal != title))
        } else {
            setSelectedMeals((curr:any) => [...curr,title])
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
        </div>
    )
}