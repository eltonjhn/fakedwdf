import React, { useState } from 'react'
import Header from './header'
import data from './data'
import List from './list'

function App() {
  const [people, setPeople] = useState(data)

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      <div className='flex max-w-md w-full flex-col p-4 rounded-md shadow-md bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 '>
        <Header heading={"𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶"} /> 
        <p className="p-2"></p>
        {people.map((person, index) => (
          <List person={person} setPeople={setPeople} />
        ))}
      </div>
    </div>
  )
}

export default App