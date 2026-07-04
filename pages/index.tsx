
import ParticleConfig from "@/components/ParticleConfig";
import PermissionQuestion from "@/components/Questions/PermissionQuestion";
import AudioPlay from "@/components/AudioPlay";
import { JSX, useEffect, useMemo, useState } from "react";
import ActivityQuestion from "@/components/Questions/ActivityQuestion";
import DrinkQuestion from "@/components/Questions/DrinkQuestion";
import MealQuestion from "@/components/Questions/MealQuestion";
import ScheduleQuestion from "@/components/Questions/ScheduleQuestion";
import HangoutQuestion from "@/components/Questions/HangoutQuestion";
import ReviewQuestion from "@/components/Questions/ReviewQuestion";
import Final from "@/components/Questions/Final";
import { AnswerType } from "@/types";

type SurveyQuestionType = {
  [key:string]: JSX.Element
}
export default function Home() {
  const [playSongs, setPlaySongs] = useState<boolean>(false)
  const [answer,setAnswer] = useState<AnswerType>({
    activity: "" ,
    drinks: [],
    meals: [],
    hangout: "",
    date: null
  })
  const [currentQuestion, setCurrentQuestion] = useState<string>("permission")
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize(); // Get the current size immediately
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log("screenSize", screenSize);


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
        drinks:(
          <DrinkQuestion
            setCurrentQuestion={setCurrentQuestion} 
            setAnswer={setAnswer}          
          />
        ),
        meals: (
          <MealQuestion
            setCurrentQuestion={setCurrentQuestion} 
            setAnswer={setAnswer}          
          />
        ),
        hangout: (
          <HangoutQuestion
            setCurrentQuestion={setCurrentQuestion} 
            setAnswer={setAnswer}          
          />
        ),
        schedule: (
          <ScheduleQuestion
            setCurrentQuestion={setCurrentQuestion} 
            setAnswer={setAnswer}     
          />
        ),
        review: (
          <ReviewQuestion
            answer={answer}  
            setCurrentQuestion={setCurrentQuestion}
          />
        ),
        final: (<Final />)
      }
    ), [answer]
  )
  return (
    <main>
      {screenSize.width < 760 ? (
        <div>
          <div className="flex flex-col items-center justify-center h-screen p-8">
            <h1 className="text-2xl font-bold text-center">
              Please use a larger screen to access like this survey like laptop or desktop.
            </h1>
          </div>
        </div>
      ) : (
        <div>
          <ParticleConfig />
          <AudioPlay isPlay={playSongs} />
          <div className="absolute w-screen h-screen ">
            {Questions[currentQuestion]}
          </div>
        </div>
      )}
    </main>

  );
}
