import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import './index.css';
import {Mesas, Area, Cocina, Inicio} from './App';
// import { Formulario } from "./components/Formulario";

// import reportWebVitals from './reportWebVitals';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Inicio/>
    },
    {
        path:"/Area",
        element: <Area/>

    },
    {
        path:"/Area/Mesas",
        element:<Mesas/>
    },
    {
        path:"/Area/Cocina",
        element:<Cocina/>
    }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        
           <RouterProvider router={router}/>  

           
    // <App />
);
// ReactDOM.render(<App />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
