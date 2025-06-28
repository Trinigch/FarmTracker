
import SummaryCard from "../components/SummaryCard"; 
import sheepImage from "./../assets/img/sheepswalking.jpeg";

import {Container, ImageContainer,    Title, CardsRow, CardContainer} from "./aboutFarm.styles";


function AboutFarm() {
  return (
    <Container>
      
       <Title>{"Farm"}</Title>
      <ImageContainer background={sheepImage}>
  
        <CardsRow>
          <CardContainer>
            <SummaryCard title="Total of animals" value="65" icon="🐑 🐐 🐔 🐓 🦃  " />
          </CardContainer>
          <CardContainer>
            <SummaryCard title="new born" value="16" icon="👶" />
          </CardContainer>
          <CardContainer>
            <SummaryCard title="sicks" value="1" icon="🩺" />
          </CardContainer>
        </CardsRow>
      </ImageContainer>
  
    </Container>
  );
}

export default AboutFarm;
