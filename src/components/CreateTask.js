import {React,useState} from 'react';
import Accordion from 'react-bootstrap/Accordion'
import {Collapse,Button} from 'react-bootstrap'


function CreateTask() {
    const [open, setOpen] = useState(false);

  return (
    <div>
        
      <Button 
     className="ctbtn"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
      &#127873; Task and Interview Preparaion width
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">

 <div>
<label>Task To *</label>
<select>
  <option>2202</option>
  <option>2202 Specific</option>
</select>
 </div>
 <div>
<label>Task Title *</label>
<input placeholder="Buttons and Slider" type="text"></input>
 <div>
<span>Please Enter Task Title</span>
</div>
</div>
<div>
  <label>Task Type *</label>
  
  <Accordion defaultActiveKey={['0']} alwaysOpen>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Technical Task - Practice and Theory</Accordion.Header>
    <Accordion.Body>
     
<h3>Practical Task</h3>


<div>
<label>Technical Task Type *</label>
<select>
                    <option value="">Select...</option>
             <option value="No UI">No UI</option>
             <option value="UI and Code">UI and Code</option>  
                         <option value="Only UI">Only UI</option>
   </select>
</div>
<div>
<label >Due Time*</label>
<input type="date"></input>
<span >
<button className="btn default date-set" type="button"><i 
className="fa fa-calendar"></i></button>
</span>
</div>

<div>
    <label>Task Description </label>
<textarea type='text' placeholder='Task Description'></textarea>
</div>
<span>Please describe task description</span>
<div>
    <label>Max. File size *</label>
<input type='text'></input>
</div>
<span>Maximum file size of zip file in MB</span>

<h3>Theory for interview Preparaion</h3>
<div>
    <label>Theory Due Time</label>
<input type='text'></input>
<span>
<button className="btn default date-set" type="button"><i 
className="fa fa-calendar"></i></button>
</span>
</div>

<div>
    <label>Theory task Description</label>

    <textarea type="text" placeholder="Task Description"></textarea>
</div>
<span>Please describe task description</span>

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Techniacal Task-Practice</Accordion.Header>
    <Accordion.Body>
     
    
    <h3>Practical Task</h3>


<div>
<label>Technical Task Type *</label>
<select>
                    <option value="">Select...</option>
             <option value="No UI">No UI</option>
             <option value="UI and Code">UI and Code</option>  
                         <option value="Only UI">Only UI</option>
   </select>
</div>
<div>
<label >Due Time*</label>
<input type="date"></input>
<span >
<button className="btn default date-set" type="button"><i 
className="fa fa-calendar"></i></button>
</span>
</div>

<div>
    <label>Task Description </label>
<textarea type='text' placeholder='Task Description'></textarea>
</div>
<span>Please describe task description</span>
<div>
    <label>Max. File size *</label>
<input type='text'></input>
</div>
<span>Maximum file size of zip file in MB</span>

    </Accordion.Body>
  </Accordion.Item>
</Accordion>
<Accordion>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Technical Task-Theory</Accordion.Header>
    <Accordion.Body>
  
<h3>Theory for interview Preparaion</h3>
<div>
    <label>Theory Due Time</label>
<input type='text'></input>
<span>
<button className="btn default date-set" type="button"><i 
className="fa fa-calendar"></i></button>
</span>
</div>

<div>
    <label>Theory task Description</label>

    <textarea type="text" placeholder="Task Description"></textarea>
</div>
<span>Please describe task description</span>


    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Practice Resume</Accordion.Header>
    <Accordion.Body>
      
<h3>Practice Resume</h3>
<div>
    <label>Practice Resume Due Time *</label>
    <input type="text"></input>
<span>
<button className="btn default date-set" type="button"><i 
className="fa fa-calendar"></i></button>
</span>
</div>
<div>
    <label>Practice Resume Task description *</label>
<textarea placeholder='Task Description'></textarea>
</div>
<span>Please describe task description</span>

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>Original Resume</Accordion.Header>
    <Accordion.Body>
      

    <h3>Original Resume</h3>
<div>
    <label>Original Resume Due Time *</label>
    <input type="text"></input>
<span>
<button className="btn default date-set" type="button"><i 
className="fa fa-calendar"></i></button>
</span>
</div>

<div>
    <label>Orinal Resume Task Descripton *</label>
    <div className="col-md-4">
<textarea type="text" placeholder="Task Description" ></textarea>
</div>
<span>Please describe task description</span>
</div>


    </Accordion.Body>
  </Accordion.Item>


</Accordion>
<br></br>



<br></br>
<label><div >
<input
    type="checkbox"></input>
        <span> Allow submission
        post deadline </span></div>   
     {/* checked=""    */}
    </label>
    <br></br>
    <div>
    <button type="submit">Assign Task</button>
         </div>
          </div>
           </div>



      </Collapse>


    </div>
  )
}

export default CreateTask