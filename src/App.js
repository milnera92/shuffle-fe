import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media screen and (max-width: 768px) {
    height: auto;
    padding: 2rem;
  }
`;

const Card = styled.div`
  background-color: #FFB6C1;
  border: 4px solid #000000;
  box-shadow: 4px 4px #000000;
  padding: 2rem;
  margin: 2rem;
  max-width: 80%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Content = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Button = styled.button`
  background-color: #000000;
  border: none;
  color: #FFFFFF;
  font-size: 1rem;
  padding: 1rem 2rem;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.8rem 1.5rem;
  }
`;

function App() {
  const [randomItem, setRandomItem] = useState(null);

  useEffect(() => {
    console.log('useEffect called');
    fetch('https://shuffle-be.onrender.com/rss')
      .then(response => response.json())
      .then(data => {
        setRandomItem(data.items[Math.floor(Math.random() * data.items.length)]);
      });
  }, []);

  if (!randomItem) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      {randomItem && (
        <Card>
          <Title>{randomItem.title}</Title>
          <Content>{randomItem.contentSnippet.substring(0, randomItem.contentSnippet.length - 91)}</Content>
          <Button><audio src={randomItem.enclosure.url} controls></audio></Button>
        </Card>
      )}
    </Container>
  );
}

export default App;
