import { Dispatch, SetStateAction } from "react";
import Card from "../Card";
import Checkbox from "../Checkbox";

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

    const handleClick = (drink:DrinkType) => {
        setCurrentQuestion(() => "recovery")
    }

    const handleSelected = (e:any) => {
        const { checked, name } = e.target

        if(checked) {

            setAnswer((curr:any) => ({
                ...curr,
                drinks: [...curr.drinks, name]
            }))

        } else {
            setAnswer((curr:any) => ({
                ...curr,
                drinks: curr.drinks.filter((drink:string) => drink!=name)
            }))
        }

    }
    return(
        <div className="w-fit p-8 mx-auto mt-10 ">
            <p className="text-2xl font-bold text-slate-200">RECOVERY DRINKS🤩</p>
            <p className="text-xl text-2xl mt-10 font-semibold">Please Pick A Drink😁</p>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-8 w-fit mx-auto mt-4">
                {drinks.map((drink, index:number) => (
                    <div key={index} className="">
                        <Checkbox 
                            label=""
                            name={drink.title}
                            checked={} 
                            onChange={() => {}} />
                        <Card 
                            imagePath={drink.imagePath} 
                            title={drink.title} 
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}