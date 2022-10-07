import React from 'react'

function list({person, setPeople}) {
  const {id, name, image, user} = person
  
  const followBtn = () => {
    setPeople(prev => prev.filter((p) => { return p.id != id}))
  }
  
  return (
    <div key={id} className='flex items-center mt-2 shadow-md p-2 bg-white rounded-lg'>
      <img src={image} className="bg-[#fd79a8] rounded-full max-h-[60px] max-w-[60px]" alt="" />
      <p className="p-1"></p> 
      <div className='grow'>
        <div className='text-lg font-semibold'>{name}</div>
        <div>{user}</div>
      </div>
      <p className="p-1"></p> 
      <div>
        <button onClick={followBtn} className='bg-[#60a5fa] hover:bg-[#0369a1] rounded-md px-2 py-1 font-bold'>Follow</button>
      </div>
    </div>
  )
}

export default list