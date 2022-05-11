import {Breadcrumb, Accordion, Button, Form, Modal, Card, Table } from "react-bootstrap";
import { FaGift } from "react-icons/fa";
function AdminRequest() {
  return (
    <div>
        <Breadcrumb>
        <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item active>Requests</Breadcrumb.Item>
      </Breadcrumb>
  <Accordion >
  <Accordion.Item eventKey="0">
  <Accordion.Header ><FaGift style={{margin: "2px 5px 2px"}}/>Requests</Accordion.Header>
  <Accordion.Body>
  <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>S.N</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry </td>
      <td>bird </td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
  </div>
  )
}

export default AdminRequest