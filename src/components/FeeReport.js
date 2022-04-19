import React from 'react'
import {InputGroup } from "react-bootstrap"

function FeeReport() {
  return (
      <div>

      
    <div>
        <label> Report For </label>
        <InputGroup className="mb-3">
    <FormControl aria-label="Text input with dropdown button" />

    <DropdownButton
      variant="outline-secondary"
      title="Dropdown"
      id="input-group-dropdown-2"
      align="end"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
    </InputGroup>
        
    </div>
    </div>
  )
}

export default FeeReport