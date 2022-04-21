import React from 'react'
import { FaGift } from "react-icons/fa";
import {Breadcrumb,Button} from "react-bootstrap"
function Requests() {
  return (
  <div className='rqvstContainer'>
  <Breadcrumb>
  <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
  <Breadcrumb.Item active>Requests</Breadcrumb.Item>
  </Breadcrumb>
  <div className='rqvstHeader'>
    <div className='iconContainer'>
    
    <h4 className='h4'>Create a Request</h4>
    </div>
  </div>
  <div className='contentConatainer' >
    <div className='inputContainer'>
    <label className='label'>Request Type</label>
    <select>
      <input ></input>
      <option>Select</option>
      <option value="">New software installation</option>
      <option value="">Unable to login thru my user name</option>
      <option value="">Internet not working</option>
      <option value="">Monitor display problem</option>
      <option value="">System hangs frequently</option>
      <option value="">Audio not working</option>
      <option value="">OS not booting</option>
      <option value="">Install Xcode</option>
      <option value="">Keyboard not working properly</option>
      <option value="">No keyboard</option>
      <option value="">Mouse not working properly</option>
      <option value="">No mouse</option>
      <option value="">Dusty mouse </option>
      <option value="">Dusty Desk</option>
      <option value="">Dusty Keyboard</option>
      <option value="">Dusty Room</option>
      <option value="">Claning Required For bathroom</option>
      <option value="">Liquid hand wash required</option>
      <option value="">Liquid dish wash required</option>
      <option value="">Chair is not clean </option>
      <option value="">Chair is not proper</option>
      <option value="">Drinking water is not clean</option>
      <option value="">No dedicated sysytem for me</option>
      <option value="">No monitor for my system</option>
      <option value="">No CPU for my system</option>
      <option value="">Need a marker for my lab</option>
      <option value="">Need a duster for my lab</option>
      <option value="">Others</option>
    </select>
    </div>
    <div>
<label>Lab ID</label>
<select>
    <input ></input>
    <option>Select</option>
</select>
    </div>
    <div>
<label> Seat Number</label>
<select>
<input ></input>
<option>Select</option>
</select>

</div>
<div>
  <label>Description</label>
  <textarea placeholder='Ticket Description' type="text"></textarea>
  <p>Please describe in detail</p>
</div>

<div>
<Button variant="success" onClick={
   ()=>{
     alert("You have some form errors. Please check below.")
   }}>Submit</Button>{' '}
</div>
</div>
 </div>


  )
}

export default Requests