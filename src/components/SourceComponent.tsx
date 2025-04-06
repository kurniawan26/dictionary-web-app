interface ISourceComponent {
  sourceUrls: string[]
}

function SourceComponent({ sourceUrls }: ISourceComponent) {
  return (

    <div className="source mt-5 md:mt-10 flex flex-col gap-5">
      <hr className="text-gray-light  w-full h-0.5" />
      <div className="flex gap-0 md:gap-5 flex-col">
        <p className="heading-s  text-gray font-light">Source</p>
        {sourceUrls.map((sourceUrl: string, index: number) => (
          <a key={index} href={sourceUrl} className="flex items-center gap-2">
            <p className=" body-s">
              {sourceUrl.replace('https://', '').replace('www.', '')}
            </p>

            <span className="w-3 h-3">
              <img src="assets/images/icon-new-window.svg" alt="icon new window" className="w-fit h-full" />
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default SourceComponent