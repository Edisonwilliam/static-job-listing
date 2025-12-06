import React from 'react'
import Header from './Header.jsx'
import BoxComponent from './BoxComponent.jsx'


const App = () => {
  return (
    <>
    <Header />
    <div className='space-y-10 mt-20 px-5'>
    <BoxComponent />
    </div>
    </>
  )
}

export default App