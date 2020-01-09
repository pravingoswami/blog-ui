import React from "react";
import ReactDOM from "react-dom";
import PaginationComponent from "react-reactstrap-pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pagination } from "reactstrap";

class CustomPagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPage: 1
    };

    this.handleSelected = this.handleSelected.bind(this);
  }

  handleSelected(selectedPage) {
    console.log("selected", selectedPage);
    this.setState({ selectedPage: selectedPage });
  }

  render() {
    return (
      <div className="container-fluid">
        <h3>Reacstrap Pagination Component</h3>
        <hr />
        <h5>Selected page: {this.state.selectedPage}</h5>
        <hr />
        <h5>Default maxPaginationNumbers (5)</h5>
        <PaginationComponent
          totalItems={50}
          pageSize={3}
          onSelect={this.handleSelected}
        />
      </div>
    );
  }
}

export default CustomPagination
