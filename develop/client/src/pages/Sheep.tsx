import SummaryCard from "../components/SummaryCard"; 
import sheepImage from "./../assets/img/moresheeps.jpeg";
import {Container, ImageContainer,    Title, CardsRow, CardContainer} from "./aboutFarm.styles";


function AboutFarm() {
  return (
    <Container>
      
       <Title>{"Sheep 🐑"}</Title>
       <ImageContainer background={sheepImage}>
    
        <CardsRow>
          <CardContainer>
            <SummaryCard title="Total of animals" value="30" icon="🐑" />
          </CardContainer>
          <CardContainer>
            <SummaryCard title="new born" value="15" icon="👶" />
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