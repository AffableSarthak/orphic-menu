import React from 'react'

const OrphicLoader = ({ isLoading }) => {
  //   if (isLoading) {
  return (
    // <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
    //   <span
    //     className="text-primary opacity-75 my-0 mx-auto block relative w-0 h-0"
    //     style={{ top: '50%' }}
    //   >
    //     <i className="fas fa-circle-notch fa-spin fa-5x"></i>
    //   </span>
    // </div>
    <div>
      <span className="animate-spin text-primary opacity-75"></span>
    </div>
  )
  //   } else {
  //     return <div></div>
  //   }
}

export default OrphicLoader
