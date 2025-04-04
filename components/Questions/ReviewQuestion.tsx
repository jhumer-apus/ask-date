import { Dispatch, SetStateAction } from "react";

interface Props {
    answer: any;
}

export default function ReviewQuestion(props: Props) {
    const { answer } = props;
    const drinks = answer.drinks.join(", ");
    const meals = answer.meals.join(", ");

    return (
        <div className="absolute inset-0 grid place-items-center">
            <div className="w-fit p-8 text-white text-xl bg-black rounded-lg">
                <p>1. So first we play <b>{answer.activity}</b></p>
                <p>2. Then for recovery we drink some of this <b>{drinks}</b></p>
                <p>3. Our meal consists of either <b>{meals}</b></p>
                <p>4. Lastly, we are going to hang out at <b>{answer.hangout}</b></p>
                <p>On <b>{answer.date}</b></p>
                <br></br>
                <div className="w-fit m-auto">
                    <button className="text-center">Send</button>
                </div>
            </div>
        </div>
    );
}
