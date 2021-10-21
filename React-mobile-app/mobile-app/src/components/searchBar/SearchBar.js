import React from 'react';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import './SearchBar.scss'

function SearchBar(props) {

  function handleChange(e){
    props.onSearch(e.target.value)
  }

    return(
            <Form className="d-flex search-style">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                        onChange={handleChange}
                        value={props.search}
                    />
            </Form>
        )
}

export default SearchBar;