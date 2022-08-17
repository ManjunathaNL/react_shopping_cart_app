import React, { useState } from 'react'
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const SearchBox = ({keyword,setKeyword}) => {
    return (
        <div>
        <InputGroup className="col-6">
          <FormControl
            placeholder="Search"
            aria-label="Search"
            value={keyword}
            aria-describedby="basic-addon2"
            onChange={(e) => setKeyword(e.target.value)}
          />
          {/* <Button variant="outline-secondary" id="button-addon2">
            Search
          </Button> */}
        </InputGroup>
        </div>
    )
}

export default SearchBox