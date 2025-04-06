import { useEffect, useMemo } from "react"

interface ITranslateComponent {
  word: string
  phonetic: string
  sound: string
}

function TranslateComponent(
  { word, phonetic, sound }: ITranslateComponent,
) {

  const audio = useMemo(() => new Audio(sound), [sound])
  const playAudio = () => {
    audio.play()
  }
  const handleClick = () => {
    playAudio()
  }

  useEffect(() => {
    audio.addEventListener('ended', () => {
      audio.currentTime = 0
    })
    return () => {
      audio.removeEventListener('ended', () => {
        audio.currentTime = 0
      })
    }
  }, [audio])


  return (
    <div className="output-component flex justify-between items-center  mt-4 md:mt-11">
      <div className="flex flex-col gap-0.5 md:gap-2">
        <h1 className="heading-l font-bold ">
          {word}
        </h1>
        <p className="heading-m text-purple ">{phonetic}</p>
      </div>

      <button className="cursor-pointer h-[75px] w-[75px] bg-purple-light rounded-full relative hover:bg-purple transition-all duration-300 group" disabled={!sound} onClick={handleClick}>
        <img src="assets/images/icon-play.svg" alt="icon play" className="w-1/3 h-1/3 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] group-hover:filter group-hover:brightness-0 group-hover:invert" />
      </button>
    </div>
  )
}

export default TranslateComponent