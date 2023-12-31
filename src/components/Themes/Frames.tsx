import React from 'react'

 const Frames:React.FC<frameProps> = ({bg="bg-bg",className}) => {
  return (
  <div className={` h-full ${bg} ${className} border-r-[0.8px]  border-b-[0.8px] border-border`}></div>
  )
}

export default Frames;