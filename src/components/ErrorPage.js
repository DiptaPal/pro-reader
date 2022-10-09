import React from 'react'
import { useRouteError } from 'react-router-dom'
import Header from './Header'

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Header />
      <div className='flex flex-col min-h-[700px] justify-center items-center'>
        <h1 className='text-4xl'>Ops! An Error Ocurred!</h1><br />
        {
          error && (
            <div className='text-center text-2xl'>
              <p className='text-red-500'>{error.statusText || error.message}</p>
              <p>{error.status}</p>
            </div>
          )
        }
      </div>
    </>
  )
}

export default ErrorPage
