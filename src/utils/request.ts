import axios from "axios";
import {message} from "antd";
import {hideLoading, showLoading} from "@/utils/loading/index..tsx";

const instance = axios.create({
  baseURL: "/api",
  timeout: 8000,
  timeoutErrorMessage: "请求超时",
  withCredentials: true
})

// 请求拦截器
instance.interceptors.request.use(
  config => {
    showLoading()
    const token = localStorage.getItem("token")
    if (token) {
      config.headers.Authorization = 'Token::' + token
    }
    return {...config}
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(response => {
  const data = response.data
  hideLoading()
  if (data.code === 500001) {
    message.error(data.msg)
    localStorage.removeItem('token')
    location.href = '/login'
  } else if (data.code === 0) {
    message.error(data.msg)
    return Promise.reject(data)
  }
  return data.data
},(err)=>{
  hideLoading();
  message.error(err.msg)
  return Promise.reject(err.msg)
})

export default {
  get(url: string, params: any) {
    return instance.get(url, {params})
  },
  post(url: string, params: any) {
    return instance.post(url, params)
  }
}
