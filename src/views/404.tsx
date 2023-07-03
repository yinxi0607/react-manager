import {Result,Button} from 'antd';
import {useNavigate} from "react-router";

function NotFound(){
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('/');
  }
  return <Result status={404} title="404" subTitle="Sorry, the page you visited does not exist." extra={
    <Button type="primary" onClick={handleClick}>Back Home</Button>
  }/>
}

export default NotFound;
