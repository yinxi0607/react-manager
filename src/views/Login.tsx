import {useEffect} from "react";
import request from "@/utils/request.ts";
export default function Login(){
  useEffect(()=>{
    request.get('/users/login', {
      id:12345
    }).then(res => {
      // const token = res
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  })
  return <div>Login</div>
}
