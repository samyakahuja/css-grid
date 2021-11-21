import Head from "next/head";
import GridValidGame from "../components/gridValidGame";
import styled from "styled-components";

export default function IsGridValid() {
  return (
    <div>
      <Head>
        <title>CSS Grids</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Header>
          <Heading>:is(grid:valid)</Heading>
          <SubHeading>Identify which grid is valid</SubHeading>
        </Header>
        <Main>
          <GridValidGame />
        </Main>
      </Wrapper>
    </div>
  );
}

const Root = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  max-width: 950px;
  margin: auto;
  padding: 24px;
`;

const Main = styled.main`
  margin-top: 16px;
`;

const Header = styled.header``;

const Heading = styled.h1`
  color: hsl(222deg, 22%, 5%);
  font-size: 2rem;
  margin: 0;
  text-align: center;
`;
const SubHeading = styled.p`
  color: hsl(222deg, 22%, 50%);
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
`;
