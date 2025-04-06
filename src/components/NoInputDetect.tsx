function NoInputDetect() {
  return (
    <div className='flex flex-col items-center text-center gap-4 h-screen mt-8'>
      <p className='text-2xl'>👀</p>
      <p className='heading-s'>You haven't searched for any word...</p>
      <p className='body-m'>
        Please type a word in the search bar above to see the results.
      </p>
    </div>
  )
}

export default NoInputDetect