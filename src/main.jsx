import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Header,Footer}from './component'
import { BrowserRouter } from 'react-router-dom'

 //viet Hoa la conponent con thuong thi khong

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
      <App />
 </BrowserRouter>
)
//react router dom
