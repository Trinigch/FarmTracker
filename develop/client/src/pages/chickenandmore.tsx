
import SummaryCard from "../components/SummaryCard"; 

import moreImage from "./../assets/img/cats.jpeg";
import {Container, ImageContainer,    Title, CardsRow, CardContainer} from "./aboutFarm.styles";


function AboutFarm() {
  return (
    <Container  >
      
       <Title>{"🐔 Chicken and 🦃  more"}</Title>
      <ImageContainer background={moreImage}>
    
  
        <CardsRow>
          <CardContainer>
            <SummaryCard title="Total of animals" value="28" icon="🐔🐓🦃 " />
          </CardContainer>
          <CardContainer>
            <SummaryCard title="new born" value="0" icon="👶" />
          </CardContainer>
          <CardContainer>
            <SummaryCard title="sicks" value="0" icon="🩺" />
          </CardContainer>
        </CardsRow>
      </ImageContainer>
  
    </Container>
  );
}

export default AboutFarm;