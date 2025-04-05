import { useEffect, useRef, useState } from "react";

interface Props {
    isPlay: boolean
}
export default function AudioPlay(props:Props) {

    const {isPlay} = props

    const [currSongIndex, setCurrSongIndex] = useState<number>(0)
    const songs = [    
        "songs/la-vien-en-rose-piano.mp3",
        "songs/la-vien-en-rose-trumpet.mp3",
    ]


    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if(isPlay) {
            if (audioRef.current) {
                audioRef.current.play().catch((error:Error) => {
                    console.error('Error attempting to play audio:', error);
                });
            }
        }
    },[isPlay])


    const handleTrackEnd = () => {
        if (audioRef.current) {
        const nextTrackIndex = (currSongIndex + 1) % songs.length;
        setCurrSongIndex(nextTrackIndex);
        }
    };

    useEffect(() => {
        const audioElement = audioRef.current;
        if (audioElement) {
        audioElement.addEventListener('ended', handleTrackEnd);
        return () => {
            audioElement.removeEventListener('ended', handleTrackEnd);
        };
        }
    }, [currSongIndex]);
    return (
        <audio 
            ref={audioRef}
            src={songs[currSongIndex]} 
            autoPlay 
        />
    )
}