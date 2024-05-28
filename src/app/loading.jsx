import React from 'react'

export default function Loading() {
  return (
    <div style={{position: "absolute", backgroundColor: "gray",left: 0,right: 0,top: 0,bottom: 0 , zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div className='loader'></div>
    </div>
  )
}
