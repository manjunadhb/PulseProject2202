import React from 'react'
import {Button,Form,Breadcrumb} from "react-bootstrap"
import Batch2202 from './Batch2202'


function FeeReport() {
  return (
      <div >
    
    <Breadcrumb>
  <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
  <Breadcrumb.Item active>Fee report</Breadcrumb.Item>
</Breadcrumb>

<div className="fee">
    <label className='feelabel'>Report For</label>
     
      <Form.Select defaultValue="Select..." style={{width:"500px"}}>
        <option>Choose...</option>
        <option >2201</option>
        <option >2112</option>
        <option >2111</option>
        <option >2110</option>
        <option >2108</option>
        <option >2106</option>
        <optgroup label="Completed Batches">
        <option >2103</option>
        <option >2101</option>
        <option >2012</option>
        <option >2011</option>
        <option >2010</option>
        <option >2006</option>
        <option >2003</option>
        <option >2001</option>
 </optgroup>
      </Form.Select>
   
    <Button variant="primary" onClick={()=>
        {
          
    
      }}>Get Report</Button>{' '}

    </div>
    <br></br><br></br>
     <Batch2202/>
    </div>
    
  )
}

export default FeeReport