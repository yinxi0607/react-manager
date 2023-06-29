import {Link, Navigate, useRoutes} from "react-router-dom";
import App from "../App.tsx";

function ReactDemo(){
  return <div>ReactDemo<Link to='..'>Back</Link></div>
}
function Vite(){
  return <div>欢迎学习vite4.0</div>
}

function Test(){
  return <div>Test{<Navigate to='/react'/>}</div>
}
function NotFound(){
  return <h2>NotFound</h2>
}

function BaseRouter(){
  const routes = useRoutes([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/react',
      element: <ReactDemo />,
    },
    {
      path: '/vite',
      element: <Vite />,
    },
    {
      path: '/test',
      element: <Test />,
    },
    {
      path: '*',
      element: <NotFound />,
    }
  ])
  return routes
}

export default BaseRouter
