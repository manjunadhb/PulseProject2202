import React from 'react'
import { Button , Form , Accordion} from 'react-bootstrap'

function Ranking() {
  return (
    <div>
      <div className = "formreport">
       <label className ="reportlabel" >Report For</label>           
       <Form.Select defaultValue="select..." style={{width: "500px"}}>
             <option>2201</option>
             <option>2112</option>
             <option>2111</option>
             <option>2110</option>
             <option>2108</option>
             <option>2106</option>
             <optgroup label="Completed Batches">
             <option>2103</option>
             <option>2101</option>
             <option>2012</option>
             <option>2011</option>
             <option>2010</option>
             <option>2006</option>
             </optgroup>
             </Form.Select>

        <Button variant="primary">Get Report</Button>

      </div>
<br></br><br></br>
      <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header> <h4>2202 - Started from: 14-Feb-22</h4></Accordion.Header>
    <Accordion.Body>
      
    </Accordion.Body>
  </Accordion.Item>
  
</Accordion>
    </div>
  )
}

export default Ranking
