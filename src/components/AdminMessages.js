import React,{useState} from 'react'
import {Button,Form,Modal,Card,Table,} from 'react-bootstrap'

function AdminMessages() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div className='msg'>
        
        <Button variant='primary'  onClick={handleShow}>
        send message
      </Button>
      <br></br>
      <br></br>

<Table striped bordered hover size="lg">
  <thead>
    <tr>
      <th>Msg-Uid
      </th>
      <th>Category</th>
      <th>subject</th>
      
      <th>Sent to</th>
      <th>read/unread</th>
      <th>Sent By</th>
      <th>Delivery on</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3</td>
      <td>information</td>
      <td>Test Message</td>
      <td>2018</td>
      <td>0 of 0</td>
      <td>null </td>
      <td>sun 09-jan-2021 06:17:38 pm</td>

    </tr>
    <tr>
    <td>2</td>
      <td>information</td>
      <td>Test Message</td>
      <td>2018</td>
      <td>0 of 0</td>
      <td>null </td>
      <td>sun 22-jan-2017 07:17:38 am</td>

    </tr>
    <tr>
    <td>1</td>
      <td>information</td>
      <td>Test Message</td>
      <td>2018</td>
      <td>0 of 0</td>
      <td>null </td>
      <td>sun 22-jan-2017 07:17:38 am</td>

    
    </tr>
  </tbody>
  <a> add more</a>

  

 
</Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>


          <Card border="primary" bordercolor='red' style={{ color: 'blue' }}>
  <Card.Body  className='mb-2'>   Review  And Get Installment </Card.Body>
</Card>

          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>

         
           <Form.Group className="blockquote mb-0" controlId="formBasicSend to">
           <Form.Label>Send to *</Form.Label>
           </Form.Group>
                    <br></br>
										
              <select multiple className='form-control'  >  
              <option  disabled='disabled'>progress batches</option>
             <option value='2201'>2201 </option>
            <option value='2001'>2001 </option>
            <option value='2103'> 2103</option>
            <option value='2202'>2202 </option>
            <option value='2203'>2203 </option>
            <option  disabled='disabled'>complete batches</option>
            <option value='2001'>2201 </option>
            <option value='2002'>2001 </option>
            <option value='2104'> 2103</option>
            <option value='2004'>2202 </option>
            <option value='2103'>2203 </option>
           </select>  
           <br></br>
           <br></br>
       <label> cateogery *</label>
       <select>
       <option value='select'>select...</option>
            <option  value='information'>information</option>
            <option value='job opptunity'> job opputunity</option>
            <option value='fee remainder'>fee remainder </option>
            <option value='irregular'>irregular </option>
            <option value='Late to offc'>late to offc
             </option>
            <option value='Appreciation'>irregular </option>
            </select>
            <br></br>
            <br></br>
   <label>  Subject *</label>
   <input type='text' placeholder='please enter subject'></input>

     <br></br>
            <br></br>
   <label>  Message *</label>
   <br></br>
   <textarea placeholder='please enter message'></textarea >

 
   
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default AdminMessages