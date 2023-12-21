/* eslint-disable react/jsx-key */
'use client'
import { useState } from 'react'
import FeedBack from './components/FeedbackItem'
import Button from './components/Button'
export default function Home() {
  const [showFeedbackPop,setFeedbackPop]=useState(false);
  const [showFeedbackItem,setFeedbackItem]=useState(null);
  function openFeedbackPop()
  {
     setFeedbackPop(true);
  }
  function openFeedbackItem()
  {
setFeedbackItem(true);
  }
  const feedbacksI=[
    
      {
        "title": "Make Almira",
        "description": "Create a stylish and functional Almira with meticulous attention to detail, offering ample storage space and a sleek design.",
        "votesCount": 7
      },
      {
        "title": "Make Sofas",
        "description": "Craft comfortable and aesthetically pleasing sofas that seamlessly blend into any living space and you should try to do more interesting stuff like building custom things more often.",
        "votesCount": 6
      },
      {
        "title": "Make LCD Units",
        "description": "Design modern and space-efficient LCD units, combining form and functionality to enhance your entertainment area.",
        "votesCount": 5
      },
      {
        "title": "Make Wood Partitions",
        "description": "Construct wooden partitions that add a touch of elegance to your space while providing privacy and organization.",
        "votesCount": 4
      },
      {
        "title": "Make Doors",
        "description": "Manufacture high-quality doors that not only ensure security but also contribute to the overall aesthetic appeal of your home or office.",
        "votesCount": 3
      },
      {
        "title": "Make Study Tables",
        "description": "Build functional and ergonomic study tables, fostering a conducive environment for focused work and learning.",
        "votesCount": 2
      },
      {
        "title": "Make Cricket Bats",
        "description": "Make high quality cricket bats it will attract children to buy your productsand moreover it will improve your reach to customers of various ages.",
        "votesCount": 1
      }
      
  ];
  return (
    <main className="bg-white md:max-w-2xl mx-auto md:shadow-lg md:rounded-lg md:mt-8 overflow-hidden">
     <div className=" bg-gradient-to-r from-red-500 to-purple-300 p-7">
      <h1 className="font-bold text-xl">SA Furniture</h1>
      <p className=' text-opacity-90 text- '>what kind of furnitures we should make? what do you guys think ?</p>
     </div>

     <div className=' bg-gray-100 px-7 py-4 flex border-b'>
        <div className='grow'></div>
        <div>
        <Button primary onClick={openFeedbackPop} >Give Feedback</Button>
        </div>
      </div>

      <div className='px-7'> 
    {feedbacksI.map((feedbackIt) => (
      <FeedBack {... feedbackIt} onOpen={openFeedbackItem}/>
))}
  
      </div>


      {showFeedbackPop && 
        <div className=' fixed inset-0 bg-white md:bg-black md:bg-opacity-70 flex md:items-center'>
            <button onClick={()=>setFeedbackPop(false)} className='hidden md:block fixed top-3 right-3 text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</button>
          <div className='w-full'>
          <div className=' bg-white md:max-w-2xl md:mx-auto md:rounded-lg md:overflow-hidden'>
            <div className=' relative'>
              <button onClick={()=>setFeedbackPop(false)} className='absolute top-3 left-7 md:hidden text-gray-600'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
</svg>

              </button>

              <h2 className='py-4 text-center border-b'>Give a FeedBack </h2>
  
            </div>


            
             <form className='p-7'>
              <label className='block mt-4 mb-2'>Title</label>
              <input className='w-full border p-2 rounded-md text-slate-700' type='text' placeholder='A short Title'/>
              <label className='block mt-4 mb-2'>Text Area</label>
              <textarea className='w-full border p-2 rounded-md text-slate-700' placeholder='Please Include Any Detail'></textarea>
              <div className='flex mt-2 gap-2 justify-end'>
              <Button>Attach Files</Button>
              <Button primary>Create Post</Button>
              </div>
      
              


             </form>
          </div>
          </div>

        </div>
        }
    </main>
  )
}
