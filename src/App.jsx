// "use client"
import React, { useState } from 'react'


const App = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

   const submitter = (e) =>{
    e.preventDefault()
    setmainTask([...mainTask, {title, desc}])
    settitle("")
    setdesc("")
   }
   let deleteHandler = (i)=>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
   }
   let renderTask = <h2 className='font-semibold text-lg'>No task available right now</h2>
     
    if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
    return (
      <ol className='flex item-center justify-between'>
      <div className='flex justify-between mb-5 items-center w-2/3' >
      <h4 className='text-2xl font-semibold'>{t.title}</h4>
      <h5 className='text-xl font-semibold'>{t.desc}</h5>
    </div>
    <button onClick={()=>{
      deleteHandler(i)
    }} className='bg-red-400 rounded-md text-white px-4 py-3 font-bold mb-5'>Delete</button>
      </ol>
      )
   })
  }
  return (
    <>
    <h1 className='bg-black text-white font-bold text-5xl p-5 text-center
    '  > Todo List </h1>  
     <form onSubmit={submitter}>
      <input
      type='text' className='text-xl border-zinc-800 border-4 m-8 px-4 py-5'
      placeholder='Enter task here'
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />
        <input
      type='text' className='text-xl border-zinc-800 border-4 m-8 px-4 py-5'
      placeholder='Enter description here'
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      />
      <button className=' bg-black text-white rounded-xl font-bold text-1xl px-3 py-3
      ' >Add Task</button>
     </form>
     <hr/>
     <div className='bg-slate-200 p-8'> 
       <ol>
     {renderTask}
     
       </ol>
     </div>
    </>
  )
}

export default App
