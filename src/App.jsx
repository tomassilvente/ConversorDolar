import { useState } from 'react'
import getCurrency from './services/getCurrency'
function App() {
  
  const [conversion, setConversion] = useState(0)

  async function handleChange(e){
    let conv = await getCurrency(e.target.value)
    setConversion(conv.toFixed(2))
  }
  
  return (
    <>
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    <h1 className='text-center text-7xl text-[#eee] mt-14'>Valor Dolar Hoy</h1>
    <div className='flex md:mt-[50px] mt-[100px] justify-center'>
      <img className='w-[175px] h-[100px] md:h-full md:w-[350px]' src='./USD.png' width={350}/>
      <p className='text-white mt-[32px] text-2xl md:mt-[60px] mx-[50px] md:text-5xl font-bold'> TO </p>
      <img className='w-[175px] h-[100px] md:h-[150px] md:w-[350px]' src='./ARS.png' width={300}/>
    </div>
    <div className=' mx-[20%] mb-[36px] pt-[46px] flex justify-center '>
      <form className='grid' >
        <span className='text-white text-center text-3xl mb-5'>U$D</span>
        <input className='px-3 py-2 rounded-xl text-2xl font-bold bg-[#d4f5f2]' step={0.01} type='number' placeholder='USD' defaultValue={0} onChange={handleChange}/>
      </form>
    </div>
    <div className=' mx-[20%] flex text-center justify-center '>
      <p className='text-white text-4xl mb-5'>AR$</p>
      <p className='text-white text-4xl ml-3'>{conversion && conversion}</p>
    </div>
    </>
  )
}

export default App
