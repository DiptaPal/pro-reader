import React from 'react'

const Book = ({ book }) => {
  const { isbn13, image, title, subtitle, price } = book
  return (
    <a href={`../book/${isbn13}`} aria-label='View Item'>
      <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
        <img
          className='object-cover w-full h-56 md:h-64 xl:h-80'
          src={image}
          alt=''
        />
        <div className='absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100'>
          <p className='mb-4 text-lg font-bold text-gray-100'>{title}</p>
          <br />
          <p className='text-sm tracking-wide text-gray-300'>{subtitle}</p>
          <br />
          <p className='text-sm tracking-wide text-gray-300'>Price: {price}</p>
        </div>
      </div>
    </a>
  )
}

export default Book
