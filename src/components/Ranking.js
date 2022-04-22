import React from 'react'
import { Button , Form , Accordion , Breadcrumb , Table} from 'react-bootstrap'

function Ranking() {
  return (
    <div>

<Breadcrumb>
  <Breadcrumb.Item active>Admin Dashboard</Breadcrumb.Item>
  <Breadcrumb.Item href="#">Ranking</Breadcrumb.Item>
</Breadcrumb>


      <div className = "formreport">
       <label className ="reportlabel" >Report For</label>           
       <Form.Select  style={{width: "500px"}}>
             <option></option>
             <option>2204</option>
             <option>2202</option>
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

        <Button variant="primary" onClick={()=>
        {
          
    
      }}>Get Report</Button>

      </div>
<br></br><br></br>
      <Accordion>

      <Accordion.Item eventKey="0">
    <Accordion.Header> <h5 className="rankaccordion">2204 - Started from: 02-Apr-22</h5></Accordion.Header>
    <Accordion.Body>
    <Table responsive>
  <thead>
    <tr>
      <th>Rank</th>
      
        <th>Student Name</th>
        <th>Student ID</th>
        <th>Late To Office</th>
        <th>Min. Hrs Missed</th>
        <th>Disable Reason</th>
        <th>Max. Score</th>
        <th>Score</th>
        <th>Performance</th>
        <th>Last Attended</th>
        <th>Total Days</th>
        <th>Working days</th>
        <th>Leaves</th>
        <th>Absents</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Student 22021</td>
      <td>22021</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>

    </tr>
    <tr>
      <td>2</td>
      <td>Student 22022</td>
      <td>22022</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Student 22023</td>
      <td>22023</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Student 22024</td>
      <td>22024</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Student 22025</td>
      <td>22025</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Student 22026</td>
      <td>22026</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Student 22027</td>
      <td>22027</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Student 22028</td>
      <td>22028</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
  </tbody>
</Table>
  </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1">
    <Accordion.Header> <h5 className="rankaccordion">2202 - Started from: 14-Feb-22</h5></Accordion.Header>
    <Accordion.Body>
    <Table responsive>
  <thead>
    <tr>
      <th>Rank</th>
      
        <th>Student Name</th>
        <th>Student ID</th>
        <th>Late To Office</th>
        <th>Min. Hrs Missed</th>
        <th>Disable Reason</th>
        <th>Max. Score</th>
        <th>Score</th>
        <th>Performance</th>
        <th>Last Attended</th>
        <th>Total Days</th>
        <th>Working days</th>
        <th>Leaves</th>
        <th>Absents</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Student 22021</td>
      <td>22021</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>

    </tr>
    <tr>
      <td>2</td>
      <td>Student 22022</td>
      <td>22022</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Student 22023</td>
      <td>22023</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Student 22024</td>
      <td>22024</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Student 22025</td>
      <td>22025</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Student 22026</td>
      <td>22026</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Student 22027</td>
      <td>22027</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Student 22028</td>
      <td>22028</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
  </tbody>
</Table>
  </Accordion.Body>
  </Accordion.Item>
  
  <Accordion.Item eventKey="2">
    <Accordion.Header> <h5  className="rankaccordion">2112 - Started from: 01-Dec-21</h5></Accordion.Header>
    <Accordion.Body>
    <Table responsive>
  <thead>
    <tr>
      <th>Rank</th>
      
        <th>Student Name</th>
        <th>Student ID</th>
        <th>Late To Office</th>
        <th>Min. Hrs Missed</th>
        <th>Disable Reason</th>
        <th>Max. Score</th>
        <th>Score</th>
        <th>Performance</th>
        <th>Last Attended</th>
        <th>Total Days</th>
        <th>Working days</th>
        <th>Leaves</th>
        <th>Absents</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Student 22021</td>
      <td>22021</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>

    </tr>
    <tr>
      <td>2</td>
      <td>Student 22022</td>
      <td>22022</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Student 22023</td>
      <td>22023</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Student 22024</td>
      <td>22024</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Student 22025</td>
      <td>22025</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Student 22026</td>
      <td>22026</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Student 22027</td>
      <td>22027</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Student 22028</td>
      <td>22028</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
  </tbody>
</Table>
  </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="3">
    <Accordion.Header> <h5  className="rankaccordion">2108 - Started from: 15-Aug-21</h5></Accordion.Header>
    <Accordion.Body>
    <Table responsive>
  <thead>
    <tr>
      <th>Rank</th>
      
        <th>Student Name</th>
        <th>Student ID</th>
        <th>Late To Office</th>
        <th>Min. Hrs Missed</th>
        <th>Disable Reason</th>
        <th>Max. Score</th>
        <th>Score</th>
        <th>Performance</th>
        <th>Last Attended</th>
        <th>Total Days</th>
        <th>Working days</th>
        <th>Leaves</th>
        <th>Absents</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Student 22021</td>
      <td>22021</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>

    </tr>
    <tr>
      <td>2</td>
      <td>Student 22022</td>
      <td>22022</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Student 22023</td>
      <td>22023</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Student 22024</td>
      <td>22024</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Student 22025</td>
      <td>22025</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Student 22026</td>
      <td>22026</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Student 22027</td>
      <td>22027</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Student 22028</td>
      <td>22028</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
  </tbody>
</Table>
  </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="4">
    <Accordion.Header> <h5  className="rankaccordion">2106 - Started from: 15-Jun-21</h5></Accordion.Header>
    <Accordion.Body>
    <Table responsive>
  <thead>
    <tr>
      <th>Rank</th>
      
        <th>Student Name</th>
        <th>Student ID</th>
        <th>Late To Office</th>
        <th>Min. Hrs Missed</th>
        <th>Disable Reason</th>
        <th>Max. Score</th>
        <th>Score</th>
        <th>Performance</th>
        <th>Last Attended</th>
        <th>Total Days</th>
        <th>Working days</th>
        <th>Leaves</th>
        <th>Absents</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Student 22021</td>
      <td>22021</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>

    </tr>
    <tr>
      <td>2</td>
      <td>Student 22022</td>
      <td>22022</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Student 22023</td>
      <td>22023</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Student 22024</td>
      <td>22024</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Student 22025</td>
      <td>22025</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Student 22026</td>
      <td>22026</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Student 22027</td>
      <td>22027</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Student 22028</td>
      <td>22028</td>
      <td>0</td>
      <td>0</td>
      <td>Min hrs missed</td>
      <td>4000</td>
      <td>567</td>
      <td>-66.7%</td>
      <td>0</td>
      <td>129</td>
      <td>109</td>
      <td>0</td>
      <td>0</td>
    </tr>
  </tbody>
</Table>
  </Accordion.Body>
  </Accordion.Item>
</Accordion>

    </div>
  )
}

export default Ranking
