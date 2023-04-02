import React, { useEffect, useState } from 'react'
import { InfoUsers } from './components/InfoUsers'
import { getFetch } from './helpers/getFetch'

export const App = () => {

    const [state, setState] = useState([])

    const getInfo = async() =>{
        const {data} = await getFetch();
        setState(data);
    }

    useEffect(() => {
      getInfo()
    }, [])
   
    

    


  return (
    <>
        <div className='container'>
            <div className='nav'> BlogX</div>
            <div className='contenido'>
                {
                    state.map((stp,index)=>(
                        <InfoUsers key={index} state={stp}/>
                    ))
                }
            </div>
        </div>
    </>
  )
}
