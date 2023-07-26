import React from 'react'
import { FCenter } from './FCenter'
import Fright from './Fright'
import Fleft from './Fleft'

const Feedback = () => {
  return (
   <>
   <div className='flex lg:flex-row  justify-between flex-col gap-2'>
   <Fleft/>
   
   <FCenter/>
   <Fright/>
   </div>
   </>

  )
}

export default Feedback