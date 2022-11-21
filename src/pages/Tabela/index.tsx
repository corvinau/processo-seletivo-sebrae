import React from 'react';

import { Container } from './styles';

const Table: React.FC = () => {
  return (
    <Container>
      <div className='table'>
        <div className='th'>
          <div className='td'>Número</div>
          <div className='td'>Nome</div>
        </div>
        <div className='tr'>
          <div className='td'>01</div>
          <div className='td'>Harry Potter</div>
        </div>
        <div className='tr'>
          <div className='td'>02</div>
          <div className='td'>Ronald Weasley</div>
        </div>
        <div className='tr'>
          <div className='td'>03</div>
          <div className='td'>Alvo Percival Wulfric Brian Dumbledore</div>
        </div>
      </div>
    </Container>
  );
};

export default Table;
