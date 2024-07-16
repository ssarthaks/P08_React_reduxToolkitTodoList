import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
          <h1 className='text-3xl text-center mb-4'>Learning about Redux Toolkit</h1>
          <AddTodo />
          <Todos />
        </div>
      </div>
    </>
  )
}

export default App
