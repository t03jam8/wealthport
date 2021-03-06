import React, { Component } from "react";
import { connect } from "react-redux";
import "react-table/react-table.css";
import styled from "styled-components";
import TableElementComponent from "./TableElementComponent.js";
import { deleteRow } from "./../actions/actions.js";

//description: main structure of the table bounds and header/col titles

const TableBounds = styled.div`
  width: 500px;
  height: 482px;
  background-color: lightgrey;
  font-weight: bold;
`;

const TableHeader = styled.th`
  width: 250px;
  height: 30px;
  background-color: #ababab;
  box-shadow: 2px 2px 5px 0 grey;
`;

const mapStateToProps = state => ({
  data: state.reducer.dictionaries,
  viewDictionary: state.reducer.viewDictionary
});

const mapDispatchToProps = dispatch => ({
  deleteRow: obj => dispatch(deleteRow(obj))
});

class TableComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      viewDictionary: null,
      toggleDelete: false
    };
  }

  render () {
    const data = this.props.data[this.props.viewDictionary];
    const numberOfElements = Array.apply(null, { length: 14 });
    return (
      <TableBounds>
        <table>
          <tbody>
            <tr>
              <TableHeader>D o m a i n</TableHeader>
              <TableHeader>R a n g e</TableHeader>
            </tr>
          </tbody>
          {numberOfElements.map((el, i) => {
            return (
              <TableElementComponent
                toggleDelete={this.handleDeletePopUp}
                key={i}
                dictionary={this.props.viewDictionary}
                i={i}
                domain={data[i] ? data[i].domain : ""}
                range={data[i] ? data[i].range : ""}
                testResult={data[i] ? data[i].testResult : ""}
              />
            );
          })}
        </table>
      </TableBounds>
    );
  }
}
//
export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);
