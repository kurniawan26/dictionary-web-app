
interface IMeaningComponentProps {
  meaning: {
    partOfSpeech: string
    definitions: {
      definition: string
    }[]
    synonyms: string[]
  }
  setWord: (word: string) => void
}

function MeaningComponent({ meaning, setWord }: IMeaningComponentProps) {
  return (
    <>
      <div className="flex mt-5 md:mt-[54px] w-full justify-center items-center gap-5">
        <p className=" font-bold italic body-m">{meaning.partOfSpeech}</p>
        <hr className="text-gray-light  w-full h-0.5" />
      </div><div className="mt-5 md:mt-10 flex flex-col gap-6">
        <p className="heading-s  text-gray font-light">Meaning</p>

        <ul className='pl-6 list-disc marker:text-purple'>
          {meaning.definitions.map(({ definition }: { definition: string }, index: number) => (
            <li key={index} className="pl-4 body-m mb-3">{definition}</li>
          ))}

        </ul>
      </div>
      <div className="mt-5 md:mt-10 flex gap-5 flex-wrap">
        {meaning.synonyms.length > 0 && <>
          <p className="heading-s  text-gray font-light">Synonims</p>
          {meaning.synonyms?.map((synonym: string, index: number) => (
            <a
              key={index}
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setWord(synonym)
              }}
              className="heading-s  text-purple font-bold">{synonym}</a>
          ))}
        </>}
      </div>
    </>
  )
}

export default MeaningComponent