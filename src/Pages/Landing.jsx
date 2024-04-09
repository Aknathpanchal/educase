import React from 'react'
import { Button, Typography } from 'antd';

function Landing() {
  const { Title } = Typography;
  return (
    <div style={{padding:"20px",paddingTop:"60vh", maxWidth:"284px",background: "#F7F8F9",backgroundRepeat:"no-repeat"}}>
   <Title className='LeftTitle' level={2}>Welcome to PopX</Title>
   <p className='LeftPara' >Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
   <Button className='Button-1' style={{marginBottom:"5px",background:"#6C25FF"}} type="primary" block>
   Create Account
    </Button>
    <br/>
    <Button className='Button-1' type="primary" style={{background:"#6C25FF4B",color: "#1D2226"}} block>
    Already Registered? Login
    </Button>
    </div>
  )
}

export default Landing
