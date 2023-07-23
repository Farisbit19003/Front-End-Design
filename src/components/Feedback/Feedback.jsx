import React from 'react'
import { FCenter } from './FCenter'
import Fright from './Fright'
import Fleft from './Fleft'

const Feedback = () => {
  return (
   <>
   <div className='flex lg:flex-row  justify-between flex-col gap-2'>
   <Fright/>
   <FCenter/>
   <Fleft/>
   </div>
   </>

  )
}

export default Feedback