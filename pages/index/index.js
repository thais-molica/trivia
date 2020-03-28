import React from 'react';
import { v4 as uuid } from 'uuid';
import Link from 'next/link';
import Base from '../../components/base';
import Header from '../../components/header';
import Container from '../../components/container';
import Category from '../../components/category';
import styles from './styles';

const Index = () => {
  const categories = [
    {name:'História', id: 1},
    {name:'Geografia', id: 3},
    {name:'Mitologia', id: 3},
    {name:'Esportes', id: 3},
    {name:'Política', id: 3},
    {name:'Conhecimentos Gerais', id: 3},
  ];

  return (
    <>
    <style jsx>{styles}</style>
      <Base>
        <Header />
        <Container>
          <h1>Categorias</h1>
          <ul>
            {categories.map(item => <li className="category-list" key={uuid()}><Link href={`/category=${item.id}`}><Category name={item.name} /></Link></li>)}
          </ul>
        </Container>
      </Base>
      </>
  );
};

export default Index;
