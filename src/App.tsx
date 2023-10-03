import { useState } from 'react'
import './App.css'
import Layout from './components/Dashboard/Layout'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Router from './routes';

function App() {

  return (
    <>

     <BrowserRouter>
      <Router/>
     </BrowserRouter>
    </>
  )
}

export default App
