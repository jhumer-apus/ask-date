import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import ParticleConfig from "@/components/ParticleConfig";
import PermissionQuestion from "@/components/Questions/PermissionQuestion";
import AudioPlay from "@/components/AudioPlay";
import { JSX, SetStateAction, useMemo, useState } from "react";
import ActivityQuestion from "@/components/Questions/ActivityQuestion";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type SurveyQuestionType = {
  [key:string]: JSX.Element
}
export default function Home() {
  const [playSongs, setPlaySongs] = useState<boolean>(false)
  const [answer,setAnswer] = useState({
    activity: "" ,
    coffee: "",
    meal: "",
  })
  const [currentQuestion, setCurrentQuestion] = useState<string>("permission")

  const Questions:SurveyQuestionType = useMemo(() => (
      {
        permission:(
          <PermissionQuestion 
            setPlaySongs={setPlaySongs} 
            setCurrentQuestion={setCurrentQuestion}
          />
        ),
        activities:(
          <ActivityQuestion
            setCurrentQuestion={setCurrentQuestion} 
            setAnswer={setAnswer}          
          />
        ),
      }
    ), []
  )
  return (
    <div>
      <ParticleConfig />
      <AudioPlay isPlay={playSongs} />
      <div className="absolute w-screen h-screen ">
        {Questions[currentQuestion]}
      </div>
    </div>
  );
}
