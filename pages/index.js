import React from "react";
import Head from "next/head";
import { v4 as uuid } from "uuid";
import Base from "../components/base";
import Category from "../components/category";
import styles from "../assets/style/pages/index";
import categories from "../utils/categories";

const Index = () => {
  return (
    <>
      <Head>
        <title>Trivia</title>
      </Head>
      <style jsx>{styles}</style>
      <Base className="page-home">
        <h1>Categorias</h1>
        <ul>
          {categories.map(item => (
            <li className="category-list" key={uuid()}>
              <a href={`/category/${item.id}`}>
                <Category name={item.name} />
              </a>
            </li>
          ))}
        </ul>
      </Base>
    </>
  );
};

export default Index;
