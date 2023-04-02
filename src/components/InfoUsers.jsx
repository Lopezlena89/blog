import React from 'react'

export const InfoUsers = ({state}) => {
  return (
    <>
        <div className='users-contenido'>
            <div className='image'>

            </div>
            <div className='info'>
                <p>{state.title}</p>
                <p>{state.body}</p>
            </div>
        </div>
    </>
  )
}
