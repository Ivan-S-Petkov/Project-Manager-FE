import React from "react";
import styled from "styled-components";
import Sirma from "../../resources/images/Sirma.png";
import Alen from "../../resources/images/Alen.jpg";
import Alex from "../../resources/images/Alex.png";
import Ivan from "../../resources/images/Ivan.png";
import bracket from "../../resources/images/bracket.png";
import java from "../../resources/images/java.png";
import js from "../../resources/images/js.png";
import react from "../../resources/images/react.png";
import spring from "../../resources/images/spring.png";
import firebase from "../../resources/images/firebase.png";
import docker from "../../resources/images/docker.png";
import neon from "../../resources/images/neon.png";
import render from "../../resources/images/render.png";

function Footer() {
  return (
    <Wrapper>
      <Content>
        <Academy>
          <Logo>
            <img src={Sirma} alt="Sirma Logo" />
          </Logo>
          <Teachers>
            <img src={Alen} alt="Alen" />
            <img src={Alex} alt="Alex" />
          </Teachers>
        </Academy>
        <Bracket180>
          <img src={bracket} alt="bracket" />
        </Bracket180>
        <img src={Ivan} alt="Ivan" />
        <Bracket>
          <img src={bracket} alt="bracket" />
        </Bracket>
        <PoweredBy>
          <div>
            <img src={react} alt="react" />
            <img src={spring} alt="spring" />
          </div>
          <div>
            <img src={firebase} alt="firebase" />
            <img src={docker} alt="docker" />
          </div>
          <div>
            <img src={neon} alt="neon" />
            <img src={render} alt="render" />
          </div>
        </PoweredBy>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #354f52;
  color: white;
  position: relative;
  bottom: 0px;
  font-family: "Work Sans";

  img {
    border-radius: 25px;
    max-width: 120px;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

const Academy = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const Teachers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Logo = styled.div`
  width: 300px;

  img {
    max-width: 300px;
    width: 100%;
  }
`;

const Bracket = styled.div`
  img {
    height: 180px;
  }
`;
const Bracket180 = styled(Bracket)`
  rotate: 180deg;
`;

const PoweredBy = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 5px;

  img {
    border-radius: 0px;
    max-width: 60px;
    margin: 3px;
  }
`;

export default Footer;
