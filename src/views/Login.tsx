import {useEffect} from "react";
import request from "@/utils/request.ts";
export default function Login(){
  useEffect(()=>{
    request.get('/users', {
      id:12345
    }).catch((err)=>{
      console.log(err)
    })
  })
  return <div>Login</div>
}
