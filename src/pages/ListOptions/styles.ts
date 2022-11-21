import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  
  a {
    text-decoration: none;
    margin-bottom: 10px;
    color: #40A1F5;
  }

  a:hover {
    text-decoration: underline;
  }
`;