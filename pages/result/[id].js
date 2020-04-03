import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { v4 as uuid } from "uuid";
import { useSelector } from "react-redux";
import Base from "../../components/base";
import Box from "../../components/box";
import Button from "../../components/button";
import Score from "../../components/score";
import FullScore from "../../components/fullScore";
import styles from "../../assets/style/pages/result";

const Result = () => {
  const [isLoading, setisLoading] = useState(true);
  const router = useRouter();
  const categoryId = parseInt(router.query.id);

  const categoryResults = useSelector(state =>
    state.find(el => el.id == categoryId)
  );
  console.log(categoryResults);

  const total = [
    { title: "Fácil", correct: 2, error: 1 },
    { title: "Médio", correct: 2, error: 1 },
    { title: "Difícil", correct: 2, error: 1 }
  ];

  useEffect(() => {
    setisLoading(false);
  }, [categoryResults]);
  return (
    <>
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
