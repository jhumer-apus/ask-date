import { Dispatch, SetStateAction, useState } from "react";
import Card from "../Card";

interface Props {
    setCurrentQuestion: Dispatch<SetStateAction<string>>
    setAnswer: Dispatch<SetStateAction<any>>
}

type DrinkType = {
    title:string;
    imagePath:string;
}

export default function DrinkQuestion(props:Props) {

    const { setCurrentQuestion, setAnswer } = props
    const [selectedDrinks, setSelectedDrinks] = useState<any[]>([])
    const [error, setError] = useState<string>("")
    

    const drinks:DrinkType[] = [
        {
            imagePath: "images/drinks/matcha.png",
            title: "Matcha🤔"
        },
        {
            imagePath: "images/drinks/coffee.png",
            title: "Coffee😏"
        },
        {
            imagePath: "images/drinks/milktea.png",
            title: "Milk Tea😮"
        },
        {
            imagePath: "images/drinks/juice.png",
            title: "Juice Lang😒"
        }
    ]

    const handleClick = () => {

        if(selectedDrinks.length < 1) {
            setError(() => "Please select 1 or more drink you like")
            return
        }

        setAnswer((curr:any) => ({
            ...curr,
            drinks: [...selectedDrinks]
        }))
        setCurrentQuestion(() => "meals")
    }

    const handleSelected = (title:string) => {
        if(selectedDrinks.includes(title)) {
            setSelectedDrinks((curr:any) => curr.filter((drink:string) => drink != title))
        } else {
            setSelectedDrinks((curr:any) => [...curr,title])
        }
    }


    return(
        <div className="w-fit p-8 mx-auto mt-10 ">
            <p className="text-2xl font-bold text-slate-200">RECOVERY TIME🤩</p>
            <p className="text-xl text-2xl mt-10 font-semibold">Please Select A Drink You Like😁</p>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-8 w-fit mx-auto mt-4">
                {drinks.map((drink, index:number) => (
                    <div key={index} onClick={() => handleSelected(drink.title)}>
                        <Card 
                            imagePath={drink.imagePath} 
                            title={drink.title}
                            className={selectedDrinks.includes(drink.title) ? "border-green-500 border-8": ""}
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