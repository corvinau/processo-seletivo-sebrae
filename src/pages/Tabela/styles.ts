import styled from 'styled-components';

export const Container = styled.div`
  background-color: #FFF;
  font-size: 16px;
  text-align: center;

  .table {
    display: table;
    border: 1px solid #40A1F5;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
  }

  .table .th {
    display: table-row;
    background-color: #40A1F5;
    color: #fff;
    font-weight: bold;
  }

  .table .th .td {
    border-right: 1px solid #fff;
  }

  .table .tr:nth-child(odd) {
    background-color: #efeeee;
  }

  .table .tr{
    display: table-row;
    border-bottom: 1px solid #000;
  }

  .table .td {
    display: table-cell;
    padding: 15px;
    border-bottom: 1px solid #40A1F5;
    border-right: 1px solid #000;
  }

  .table .td:last-child {
    border-right: 0;
  }

  .table .tr:last-child .td{
    border-bottom: 0;
  }
`;