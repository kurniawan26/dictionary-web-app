import axios from "axios"
import useSWR from "swr"
import useDebounce from "./hooks/useDebounce"
import { useState } from "react"
import MeaningComponent from "./components/MeaningComponent"
import SourceComponent from "./components/SourceComponent"
import TranslateComponent from "./components/TranslateComponent"
import InputComponent from "./components/InputComponent"
import HeaderComponent from "./components/HeaderComponent"
import LoadingComponent from "./components/LoadingComponent"
import NotFoundComponent from "./components/NotFoundComponent"
import NoInputDetect from "./components/NoInputDetect"

const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/<word>'

const fetcher = (url: string, params: string) => axios.get(url.replace('<word>', params)).then(res => res.data)

interface Data {
  word: string
  phonetic: string
  meanings: {
    partOfSpeech: string
    definitions: {
      definition: string
    }[]
    synonyms: string[]
  }[]
  sourceUrls: string[],
  phonetics: {
    text: string
    audio: string
    sourceUrl: string
    license?: {
      name: string
      url: string
    }
  }[]
}

function App() {
  const [word, setWord] = useState('keyboard')
  const debounceValue = useDebounce(word, 500)

  const { data, error, isLoading } = useSWR(
    [URL, debounceValue],
    ([url, params]) => fetcher(url, params),
  )

  const soundUrl = data?.[0].phonetics.find((phonetic: { audio: string }) => phonetic.audio)?.audio || ''

  return (
    <div className="mx-10 md:mx-[350px] mt-5 mb-[85px] md:my-[58px] min-h-screen bg-white dark:bg-darkest">
      <HeaderComponent />
      <InputComponent word={word} setWord={setWord} />

      {word === '' && (
        <NoInputDetect />
      )}
      {word !== '' && error && !isLoading ? (
        <NotFoundComponent />
      ) : null}

      {isLoading && <div className="flex flex-col items-center justify-center h-screen">
        <LoadingComponent />
      </div>}

      {data && data.length > 0 && (
        <>
          <TranslateComponent phonetic={data?.[0].phonetic} word={data?.[0].word} sound={soundUrl} />
          {data?.[0].meanings.map((meaning: Data['meanings'][0], index: number) => (
            <MeaningComponent
              key={index}
              meaning={meaning}
              setWord={setWord}
            />
          ))}
          <SourceComponent
            sourceUrls={data?.[0].sourceUrls}
          />
        </>
      )}
    </div >
  )
}

export default App
