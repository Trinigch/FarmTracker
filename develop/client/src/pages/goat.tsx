import { Link } from "react-router-dom";
import SummaryCard from "../components/SummaryCard"; 

import goatImage from "./../assets/img/news.jpeg";
import {Container, ImageContainer,    Title, CardsRow, ButtonRow , CardContainer} from "./aboutFarm.styles";


function AboutFarm() {
  return (
    <Container>
      
       <Title>{"🐐 Goat"}</Title>
       <ImageContainer background={goatImage}>
    
  
        <CardsRow>
          <CardContainer>
            <SummaryCard title="Total of animals" value="7" icon="🐐" />
          </CardContainer>
          <CardContainer>
            <SummaryCard title="new born" value="1" icon="👶" />
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