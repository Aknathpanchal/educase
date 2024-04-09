import React from 'react'
import { Button, Typography } from 'antd';

function Login() {
  const { Title } = Typography;
  return (
    <div style={{padding:"20px", maxWidth:"270px"}}>
    <Title className='LeftTitle' level={2}>Signin to your PopX account</Title>
    <p className='LeftPara' >Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
    
  
    <div className="form">
        <input type="text" placeholder='Enter Email Address' required/>
        <label >Email Address</label>
    </div>
<br/>
    <div className="form">
        <input type="text" placeholder='Enter Password' required/>
        <label >Password</label>
    </div>

    <br/>
  
     
     <Button className='Button-1' style={{background:"#CBCBCB"}} type="primary" block>
      Login
     </Button>

     </div>
  )
}

export default Login
