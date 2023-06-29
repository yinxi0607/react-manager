import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from "./router/router2.tsx";
// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <HashRouter>
//     <BaseRouter/>
//   </HashRouter>,
// )
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router}/>
)
