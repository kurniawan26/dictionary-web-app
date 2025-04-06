function NotFoundComponent() {
  return (
    <div className='flex flex-col items-center text-center gap-4 h-screen mt-8'>
      <p className='text-2xl'>😕</p>
      <p className='heading-s'>No Definitions Found</p>
      <p className='body-m'>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
    </div>
  )
}

export default NotFoundComponent
