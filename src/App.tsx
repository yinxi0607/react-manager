import './App.css'
import {RouterProvider} from 'react-router'
// import Router from "./router";
import router from "./router"
// import {BrowserRouter} from "react-router-dom";
import {ConfigProvider,App as AntdApp} from "antd";

function App() {
  // return (
  //   <BrowserRouter>
  //     <Router/>
  //   </BrowserRouter>
  // )
  return (
    <ConfigProvider
      theme={
      {
        token: {
          colorPrimary: '#ed6c00',
        }
      }
      }
    >
      <AntdApp>
        <RouterProvider router={router}/>
      </AntdApp>

    </ConfigProvider>
  )

}

export default App
