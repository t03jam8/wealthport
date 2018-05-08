import React, { Component } from "react";
import styled from "styled-components";
import TableComponent from "./../components/TableComponent.js";
import DictionaryNameComponent from "./../components/DictionaryNameComponent";

const ViewContentContainer = styled.div`
  width: 540px;
  height: 100%;
`;

const AddDictionaryContainer = styled.div`
  height: 60px;
  width: 500px;
  margin: 20px;
  margin-bottom: 0;
  background-color: #5299d3;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
`;

const TableContainer = styled.div`
  display: flex;
  width: 500px;
  background-color: white;
  margin: 20px;
`;

class Tables extends Component {
  render() {
    return (
      <ViewContentContainer>
        <AddDictionaryContainer>
          <DictionaryNameComponent />
        </AddDictionaryContainer>
        <TableContainer>
          <TableComponent />
        </TableContainer>
      </ViewContentContainer>
    );
  }
}

export default Tables;