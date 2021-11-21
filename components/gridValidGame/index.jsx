import * as React from "react";
import Image from "next/image";
import { shuffle } from "../../utils/helper";
import gameQuestions from "./questions";
import styled from "styled-components";

const IsGridValid = () => {
  const [questions, setQuestions] = React.useState(() =>
    shuffle(gameQuestions).map((x) => ({
      ...x,
      isAnswerValid: null,
    }))
  );
  const [lastAnsweredQuestion, setLastAnsweredQuestion] = React.useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const totalQuestions = questions.length;
  const currentQuestion =
    currentQuestionIndex < totalQuestions
      ? questions[currentQuestionIndex]
      : null;

  const giveAnswer = (answer, index) => {
    setQuestions((questions) => {
      const newQuestions = [...questions];
      newQuestions[index].isAnswerValid =
        answer === newQuestions[index].isValid;
      return newQuestions;
    });
    setLastAnsweredQuestion((index) => index + 1);
  };

  const gotoNextQuestion = () => {
    setCurrentQuestionIndex((idx) => idx + 1);
  };

  const gotoPreviousQuestion = () => {
    setCurrentQuestionIndex((idx) => idx - 1);
  };

  if (!currentQuestion) {
    return (
      <Wrapper>
        total score:{" "}
        {questions.reduce((acc, curr) => {
          acc = acc + (curr.isAnswerValid ? 1 : 0);
          return acc;
        }, 0)}{" "}
        / {totalQuestions}
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Question>
        <Image src={currentQuestion.src} width={400} height={400} alt="" />
      </Question>
      <Row>
        {currentQuestionIndex === lastAnsweredQuestion ? (
          <>
            <AnswerButton
              type="button"
              autoFocus="autofocus"
              onClick={() => giveAnswer(true, currentQuestionIndex)}
            >
              Yes
            </AnswerButton>
            <AnswerButton
              type="button"
              onClick={() => giveAnswer(false, currentQuestionIndex)}
            >
              No
            </AnswerButton>
          </>
        ) : (
          <>
            <ValidAnswer valid={currentQuestion.isValid}>
              {currentQuestion.isValid ? "Valid grid" : "Invalid grid"}
            </ValidAnswer>
          </>
        )}
      </Row>
      <Row>
        <NavigationButton
          type="button"
          onClick={() => gotoPreviousQuestion()}
          disabled={currentQuestionIndex === 0}
        >
          {"<"}
        </NavigationButton>
        <span>
          {currentQuestionIndex + 1}/{totalQuestions}
        </span>
        <NavigationButton
          type="button"
          onClick={() => gotoNextQuestion()}
          disabled={currentQuestionIndex === lastAnsweredQuestion}
        >
          {">"}
        </NavigationButton>
      </Row>
      {currentQuestionIndex < lastAnsweredQuestion ? (
        <AnswerWrapper isAnswerValid={currentQuestion.isAnswerValid}>
          <AnswerHeader>
            {currentQuestion.isAnswerValid
              ? "Correct!"
              : "Sorry, that's incorrect"}
          </AnswerHeader>
          <AnswerExplanation>{currentQuestion.answer}</AnswerExplanation>
        </AnswerWrapper>
      ) : null}
    </Wrapper>
  );
};

export default IsGridValid;

const AnswerWrapper = styled.div`
  background: ${(props) =>
    props.isAnswerValid ? "hsla(145deg,100%,40%,0.1)" : "hsl(225deg,16%,90%)"};
  padding: 16px 24px 24px;
  border-radius: 6px;
  max-width: 560px;
`;

const AnswerHeader = styled.strong`
  display: block;
  margin-bottom: 8px;
`;

const AnswerExplanation = styled.p`
  margin: 0;
`;

const Wrapper = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Question = styled.div`
  margin-bottom: "16px";
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const NavigationButton = styled.button`
  border: none;
  background: transparent;
  font-size: 2rem;
  width: 40px;
  height: 40px;
  margin: 0;
  box-sizing: border-box;
  border-radius: 4px;
  color: hsl(222deg, 22%, 5%);
  cursor: pointer;

  &:hover&:not(:disabled) {
    background: lightgray;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;

const AnswerButton = styled.button`
  border: none;
  background: hsl(225deg, 16%, 70%);
  font-size: 1.25rem;
  margin: 0;
  box-sizing: border-box;
  border-radius: 4px;
  color: hsl(222deg, 22%, 5%);
  cursor: pointer;
  padding: 8px 16px;

  &:hover,
  &:focus {
    background: hsl(225deg, 16%, 60%);
  }
`;

const ValidAnswer = styled.span`
  color: ${(props) => (props.valid ? "green" : "red")};
`;
