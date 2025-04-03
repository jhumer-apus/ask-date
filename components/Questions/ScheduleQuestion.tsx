import { Dispatch, SetStateAction, useState } from "react";
import Card from "../Card";
import Checkbox from "../Checkbox";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


interface Props {
    setCurrentQuestion: Dispatch<SetStateAction<string>>
    setAnswer: Dispatch<SetStateAction<any>>
}


export default function ScheduleQuestion(props:Props) {

    const { setCurrentQuestion, setAnswer } = props
    const [error, setError] = useState<string>("")
    

    const handleClick = () => {

        setAnswer((curr:any) => ({
            date: null
        }))
        setCurrentQuestion(() => "meals")
    }



    return(
        <div className="w-fit p-8 mx-auto mt-10 ">
            <p className="text-2xl font-bold text-slate-200">SCHEDULE🤩</p>
            <p className="text-xl text-2xl mt-10 font-semibold">Please Select A Drink You Like😁</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
            </LocalizationProvider>
            <div className="mt-20 w-fit m-auto">
                <button className="bg" onClick={() => handleClick()}>
                    Next
                </button>
            </div>
            <div className="text-red-400 bg-purple-900 text-3xl font-bold text-center mt-2">
                {error}
            </div>
        </div>
    )
}