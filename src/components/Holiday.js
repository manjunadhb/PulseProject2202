import React, {useState} from 'react';
import {Button,Modal,Breadcrumb,Container,Row,Col} from 'react-bootstrap';

function Holidaytask() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   return (
    <div className='mainDivHoliday'>
    <div className="announceHolidayDiv">
        <div><h1 className="holidayAnnounceHeading1">Announce Holiday</h1></div>
        <div><h4 className="holidayAnnounceHeading4">Announce Holiday</h4></div>
    </div>

    <div className="navHoliday">
        <nav aria-label="breadcrumb">
        <Breadcrumb>
        <Breadcrumb.Item active href="http://localhost:3002/adminDashboard">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Announce Holiday</Breadcrumb.Item>
        </Breadcrumb>
        </nav> 
    </div>
    <br></br>
    
    <div className="holidayBorderDiv">
    <div className='holidayDetailsDiv'>
        <label>Holiday Details</label>
    </div>
    <br></br>
        
    <div>
    <div className="holidaySelect">
    <div className="holidaySelect1">
        <label>Holiday To*</label>
    </div>
        <div className="holidaySelect1">
            <select className="formSelectHoliday" aria-label="Default select example">
            <option value="0">Select...</option>
            <option value="1">2111</option>
            <option value="2">2112</option>
            <option value="3">2201</option>
            <option value="4">2202</option>
            <option value="5">2203</option>
            <option value="6">2204</option>
            </select>
        </div>
    </div>
        
    <br></br>

    <div>
        <Container className="holidayDateContainer">
        <Row><label className="holidayLbl">Holiday Date(s)*</label>
        <Col className="holidayDateCol">
            <input type="date" className="holidayForm-control1"></input>
            <span className="holidaySpanTill">till</span>
            <input type="date" className="holidayForm-control2"  aria-label="Server"></input></Col>
        </Row>
        </Container>
    </div>
        
    
        <br></br>
            
         <div className='holidaySelect'>
            <label>Holiday Occassion*</label>
               <div className='holidaySelect1'>
                    <input type="text" placeholder='Sankranthi Festival' className="holidayOccassionName"></input>
                    <span className="holidaySpan">Please Enter Holiday Occassion</span>
                </div>
            </div>
            
            <br></br>
            
          <div className='holidaySelect'>
            <label>Holiday Description*</label>
               <div className='holidaySelect1'>
                    <input type="textarea" className="holidayDescriptionName" rows="4" columns="50"></input>
                    <span className='holidaySpan'>Please describe the reason for holiday(s)</span>
                </div>
            </div>
                
            <br></br>
     
    <div className="holidayButtons">
      <Button variant="primary" onClick={handleShow} className="holidaybtn1">AnnounceHoliday(s)</Button>
      <Button variant="secondary" onClick={handleClose}>Close</Button>
      <Modal show={show} onHide={handleClose}>
      <Modal.Body>You have Successfully Created holiday(s)!</Modal.Body>
      </Modal>
    </div>
</div>
</div>
</div>
)
}

export default Holidaytask