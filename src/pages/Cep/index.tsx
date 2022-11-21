import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';

import { Container, SearchBar } from './styles';

const Cep: React.FC = () => {
  const [data, setData] = useState<ICepData>();
  const [cep, setCep] = useState<string>('');

  const handleData = useCallback(async (): Promise<void> => {
    try {
      const response = await api.get(`/${cep}/json/`);
      setData(response.data);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setData(undefined);
      }
    }
  }, [cep]);

  useEffect(() => {
    if (cep !== '') {
      handleData();
    }
  }, [cep, handleData]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = e.currentTarget.search.value;
    setCep(value);
  };

  return (
    <Container>
      <SearchBar>
        <form onSubmit={handleSubmit}>
          <div className='input'>
            <input
              id='search'
              placeholder='Pesquise pelo CEP'
              aria-label='Barra de busca'
              type='text'
              inputMode='numeric'
              pattern='\d*'
            />

            <button type='submit'>Pesquisar</button>
          </div>
        </form>
      </SearchBar>

      {data ? (
        <div>
          <p>
            <b>CEP:</b> {data ? data.cep : '-'}
          </p>
          <p>
            <b>Rua:</b> {data ? data.logradouro : '-'}
          </p>
          <p>
            <b>Complemento:</b> {data ? data.complemento : '-'}
          </p>
          <p>
            <b>Bairro:</b> {data ? data.bairro : '-'}
          </p>
          <p>
            <b>Cidade:</b> {data ? data.localidade : '-'}
          </p>
          <p>
            <b>Estado:</b> {data ? data.uf : '-'}
          </p>
        </div>
      ) : (
        <div>Faça uma pesquisa</div>
      )}
    </Container>
  );
};

export default Cep;
