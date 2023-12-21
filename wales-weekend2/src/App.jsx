import { useState } from 'react'
import Snowfall from 'react-snowfall'
import FirstQuestion from './components/FirstQuestion'
import ImageContainer from './components/ImageContainer'
import Present from './components/Present'
import SecondQuestion from './components/SecondQuestion'
import Success from './components/Success'
import ThirdQuestion from './components/ThirdQuestion'

const App = ()=> {
  const [picToShow, setPicToShow] = useState(0);
  const moveAlong = () => {
    setTimeout(()=>setPicToShow(picToShow + 1),500)
  }
  return (
    <div className=" text-white w-full bg-gradient-to-b h-screen from-[#0d135c] via-[#2c348f] to-white ">
     <Snowfall />

    <div className='w-full flex pt-12 flex-col justify-center items-center'>
      <h1 className="text-white text-5xl">To Mum and Dad</h1>
      <div className=' font-serif text-6xl'>Merry Christmas</div>
    <div className="w-screen flex justify-center items-center">
  <Present onClick={()=> moveAlong()} showPresent={picToShow === 0}/> 
  <ImageContainer picNumber={picToShow} /></div>
  <Success showSuccess={picToShow === 4} />
   {picToShow === 1 && ( <FirstQuestion onClick={()=> moveAlong()}/>)}
       {picToShow === 2 && ( <SecondQuestion onClick={()=> moveAlong()}/>)}
      {picToShow === 3 && ( <ThirdQuestion onClick={()=> moveAlong()}/>)}
      </div>
    </div>
  )
}

export default App