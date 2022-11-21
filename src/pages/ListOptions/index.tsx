import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const ListOptions: React.FC = () => {
  return (
    <Container>
      <Link to='/table'>Tabela tableless</Link>
      <Link to='/cep'>Pesquisar CEP</Link>
      {/* <Link to='/crud'>Crud</Link> */}
    </Container>
  );
};

export default ListOptions;
