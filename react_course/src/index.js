//console.log("Hello World!");
import React from 'react'
import ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client'
import App from './01_Components/function'

//react version 18
const container=document.getElementById("root")
const root=createRoot(container)
root.render(<App/>)

//react version 17
//ReactDOM.render(<App></App>, document.getElementById("root"))

/* jsx == js + xml
*/