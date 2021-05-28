import React from "react";
import { InputGroup } from "react-bootstrap";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import PrimaryButton from "./PrimaryButton";

const Search = () => {
  const items = [
    {
      id: 0,
      name: "Cobol",
    },
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "Basic",
    },
    {
      id: 3,
      name: "PHP",
    },
    {
      id: 4,
      name: "Java",
    },
  ];

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log("searched: ", string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return item;
    // return (<p dangerouslySetInnerHTML={{__html: '<strong>'+item+'</strong>'}}></p>); //To format result as html
  };

  return (
    <div className="flex-grow-1">
      <InputGroup className="">
        <div className="flex-grow-1">
          <ReactSearchAutocomplete
            items={items}
            placeholder="Search product and categories"
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            formatResult={formatResult}
            styling={{
              fontSize: "14px",
              border: "1px solid #c7c1c1",
              borderRadius: "4px",
              flexGrow: "1",
            }}
          />
        </div>
        <InputGroup.Append>
          <PrimaryButton className="pl-2 pr-2 pl-md-3 pr-md-3">
            <span className="d-none d-md-inline">Search</span>
            <span
              className="d-md-none"
              style={{
                paddingLeft: "5px",
                paddingRight: "5px",
              }}>
              Go
            </span>
          </PrimaryButton>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default Search;
