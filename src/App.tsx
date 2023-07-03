import './App.css'
import {RouterProvider} from 'react-router'
// import Router from "./router";
import router from "./router"
// import {BrowserRouter} from "react-router-dom";

function App() {
  // return (
  //   <BrowserRouter>
  //     <Router/>
  //   </BrowserRouter>
  // )
  return <RouterProvider router={router}/>
}

export default App
