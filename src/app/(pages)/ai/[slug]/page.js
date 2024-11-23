import AIDashboard from '@/components/Ai/AIDashboard'
import React from 'react'

const page = ({ params: { slug } }) => {
     
  return (
    <div>
        <AIDashboard chatID = {slug}/>
      
    </div>
  )
}

export default page
