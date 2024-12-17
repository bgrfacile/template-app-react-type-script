import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from "react-router";
import {Router} from "@/routes";
import './index.css'


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={Router}/>
    </StrictMode>,
)
