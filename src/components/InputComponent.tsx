

function InputComponent({
  word,
  setWord,
}: {
  word: string
  setWord: (word: string) => void
}) {
  return (
    <div className="input-component mt-5 md:mt-[51px] relative">
      <input
        placeholder="Search here"
        value={word}
        type="text"
        className="heading-s font-bold w-full h-[64px] rounded bg-gray-lighter dark:bg-darker p-6 dark:placeholder:text-gray-light"
        onChange={(e) => setWord(e.target.value)}
      />
      <img
        src="assets/images/icon-search.svg"
        alt="icon search"
        className="absolute top-1/2 right-4 translate-x-[-50%] translate-y-[-50%] w-5 h-5"
      />
    </div>
  )
}

export default InputComponent