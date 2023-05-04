import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import "flowbite";
import AuthProvider from './providers/AuthProvider'
import toast, { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')).render(
<AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
</AuthProvider>

)
