import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { v4 as uuid } from "uuid";
import { useSelector } from "react-redux";
import Base from "../../components/base";
import Box from "../../components/box";
import Button from "../../components/button";
import Score from "../../components/score";
import FullScore from "../../components/fullScore";
import styles from "../../assets/style/pages/result";
import categories from "../../utils/categories";

const Result = () => {
  const [isLoading, setisLoading] = useState(true);
  const router = useRouter();
  const categoryId = parseInt(router.query.id);
  const category = categories.filter(item => item.id == categoryId)[0].name;

  const categoryResults = useSelector(state =>
    state.find(el => el.id == categoryId)
  );

  useEffect(() => {
    setisLoading(false);
  }, [categoryResults]);
  return (
    <>
      <Head>
        <title>Trivia - Resultado - {category}</title>
      </Head>
      <style jsx>{styles}</style>
      <Base className="page-result">
        <Box>
          <header>
            <span>
              <h1>Parabéns!</h1>
              <h2>Você finalizou o teste</h2>
            </span>
            <p>Veja seu desempenho nas questões</p>
          </header>
          {!isLoading && (
            <>
              <FullScore
                correct={categoryResults.totalCorrect}
                error={categoryResults.totalIncorrect}
              />
              <ul>
                {categoryResults.level.map(item => (
                  <li key={uuid()}>
                    <Score
                      title={item.type}
                      correct={item.totalCorrect}
                      error={item.totalIncorrect}
                    />
                  </li>
                ))}
              </ul>
            </>
          )}
          <Button
            label="Voltar ao início"
            onClick={() => {
              window.location = "/";
            }}
          />
        </Box>
      </Base>
    </>
  );
};

export default Result;
