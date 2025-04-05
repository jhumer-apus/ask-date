import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
    answer: any;
    setCurrentQuestion: Dispatch<SetStateAction<any>>
}

export default function ReviewQuestion(props: Props) {
    const { answer, setCurrentQuestion } = props;
    const girlName = process.env.NEXT_PUBLIC_GIRL_NAME
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [error, setError] = useState<string>("")

    const [mailOptions, setMailOptions] = useState<any>({
        email: "",
        message: "",
        girl_name: girlName
    })

    const drinks = answer.drinks.join(", ");
    const meals = answer.meals.join(", ");

    const sendMail = async (e:any) => {
        e.preventDefault()

        setIsSubmitting(() => true)

        const message = `
            1. So first we play ${answer.activity}
            
            2. Then for recovery we drink some of this ${drinks}
            
            3. Our meal consists of either ${meals}
            
            4. Lastly, we are going to hang out at ${answer.hangout}
            
            On ${answer.date}
        `;

        const payload = {
            email: mailOptions.email,
            message: message,
            girl_name: girlName 
        }

        await axios.post(backendUrl + "/send-mail", payload)
            .then(res => {
                console.log("Success")
                setIsSubmitting(() => false)
                setCurrentQuestion(() => "final")
            })
            .catch(err => {
                console.error(err)
                setIsSubmitting(() => false)
                setError(() => "Fail to send email please reload and if the error occur ask your ka date")
            })
    }

    const handleChangeEmail = (e:any) => {
        setMailOptions(() => ({
            email:e.target.value
        }))
    }
    return (
        <form onSubmit={sendMail} className="absolute inset-0 grid place-items-center">
            <div className="w-fit p-8 text-white text-xl bg-black rounded-lg">
                <p>1. So first we play <b>{answer.activity}</b></p>
                <p>2. Then for recovery we drink some of this <b>{drinks}</b></p>
                <p>3. Our meal consists of either <b>{meals}</b></p>
                <p>4. Lastly, we are going to hang out at <b>{answer.hangout}</b></p>
                <p>On <b>{answer.date}</b></p>
                <br></br>
                <div className="flex flex-col w-fit m-auto">
                    <label>Please Type Your Email and Send It</label>
                    <input 
                        type="email"
                        name="email"
                        className="border border-slate-100"
                        onChange={handleChangeEmail}
                        required
                    />
                </div>
                <br></br>
                <div className="w-fit m-auto">
                    <button className="text-center" disabled={isSubmitting}>{isSubmitting? "Please Wait": "Send"}</button>
                </div>
                <div className="text-3xl font-bold text-center mt-2">
                    {error}
                </div>
            </div>
        </form>
    );
}
