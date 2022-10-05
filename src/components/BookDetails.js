import React from 'react'

const BookDetails = () => {
  const bookData = {}
  const { image, title, desc, authors, publisher, year, rating, pdf, price } =
    bookData

  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto'>
        <div className=' lg:w-1/2'>
          <img
            src={image}
            alt=''
            className='object-cover w-full  h-80 lg:h-full'
          />
        </div>
        <div className='flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2'>
          <div>
            <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400'>
              Brand new
            </p>
          </div>
          <h5 className='mb-3 text-3xl font-extrabold leading-none sm:text-4xl'>
            {title}
          </h5>
          <p className='mb-5 text-gray-900'>
            Authors: {authors.substring(0, 50)}
          </p>
          <p className='mb-5 text-gray-900'>Publisher: {publisher}</p>
          <p className='mb-5 text-gray-900'>Year: {year}</p>
          <p className='mb-5 text-gray-900'>Rating: {rating}</p>
          <p className='mb-5 text-gray-800'>{desc.substring(0, 150)}...</p>
          <div className='flex items-center'>
            <a href={pdf && Object.values(pdf)[0]}>
              <button
                type='submit'
                className='inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none'
              >
                {pdf ? 'Download PDF' : 'Not Available'}
              </button>
            </a>
            <p className='inline-flex items-center font-semibold transition-colors duration-200 text-blue-400 hover:text-deep-purple-800'>
              Price: {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetails
