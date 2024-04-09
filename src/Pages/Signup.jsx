import React, { useState } from 'react'
import { Button, Typography, Radio } from 'antd';

function Signup() {
  const { Title } = Typography;

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <div style={{padding:"20px", maxWidth:"270px"}}>
    <Title className='LeftTitle' level={2}>Signin to your PopX account</Title>
    
    <div className="form">
        <input type="text" placeholder='Enter your name' required/>
        <label >Full Name<span style={{color:"red"}}>*</span></label>
    </div>
<br/>
    <div className="form">
        <input type="text" placeholder='Enter phone number...' required/>
        <label >Phone Number <span style={{color:"red"}}>*</span></label>
    </div>
    <br/>
    <div className="form">
        <input type="text" placeholder='Enter Email Address...' required/>
        <label >Email Address <span style={{color:"red"}}>*</span></label>
    </div>
<br/>
    <div className="form">
        <input type="text" placeholder='Enter Password...' required/>
        <label >Password <span style={{color:"red"}}>*</span></label>
    </div>
<br/>
    <div className="form">
        <input type="text" placeholder='Enter company name...' required/>
        <label >Company Name</label>
    </div>

    <br/>


<div style={{display:"flex", flexDirection:"column" ,textAlign:"left"}}>
  <label style={{fontSize:"13px",justifyContent:"left"}}>Are you an Agency?<span style={{color:"red" }}>*</span></label>
<Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>Yes</Radio>
      <Radio value={2}>No</Radio>
</Radio.Group></div>

     <br/>
     <Button className='Button-1' style={{background:"#6C25FF",marginTop:"30%"}} type="primary" block>
     Create Account
     </Button>

     </div>
  )
}

export default Signup
