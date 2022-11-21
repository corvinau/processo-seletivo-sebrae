import styled from 'styled-components';

export const Container = styled.div`
  font-size: 16px;
  text-align: center;
`;

export const SearchBar = styled.div`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;

  .input {
    display: flex;

    border: 0;
    border-radius: 5px;

    margin: 0 auto 30px 0;

    input {
      font-size: 16px;
      width: 80%;

      padding: 12px;

      border: 2px solid #40A1F5;
      border-radius: 5px 0 0 5px;
    }

    input:focus {
      outline: none;
    }

    button {
      background: #40A1F5;
      color: #ffffff;
      
      width: 20%;

      border: none;
      border-radius: 0 5px 5px 0;

      transition: background-color 0.2s ease-in-out;

      font-size: 16px;
      cursor: pointer;
    }

    button:hover {
      filter: brightness(0.9);
    }
  }
`;