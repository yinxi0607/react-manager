import {createBrowserRouter, Outlet, redirect, useLoaderData, useParams} from "react-router-dom";
import App from "../App.tsx";

function NotFound(){
  return <h2>NotFound</h2>
}

function Order(){
  const data = useLoaderData()
  console.log('order',data)
  const params = useParams()
  return <h2>订单组件,订单ID：{params.id}</h2>
}

function Goods(){
  const params = useParams()
  return <div>
    <h2>商品主页</h2>
    <p>
      <span>商品ID：{params.goodsId}</span>
      <span>订单ID：{params.orderId}</span>
    </p>
  </div>
}

function Goods2(){
  return (
    <div>
      <h2>商品主页</h2>
      <Outlet/>
    </div>
  )
}

function orderLoader({params}: any){
  console.log("loader init",params.id)
  if (!sessionStorage.token) return redirect('/login')
  return fetch(`/${params.id}.json`)
  // return {
  //   userName:'jack',
  //   token: sessionStorage.token
  // }
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/order/:id',
    element: <Order />,
    loader: orderLoader
  },
  {
    path: 'goods/:goodsId/order/:orderId',
    element: <Goods />,
  },
  {
    path: '/goods',
    element: <Goods2 />,
    children: [
      {
        path: 'list',
        element:(
          <div>
            <p>商品一</p>
            <p>商品二</p>
          </div>
        )
      },
      {
        path: 'cart',
        element:(
          <div>
            <p>苹果</p>
            <p>鸭梨</p>
          </div>
        )
      },
      ]
  },
  {
    path: '*',
    element: <NotFound />,
  }
])

export default router
