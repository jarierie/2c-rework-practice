import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #0d0d0d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubContainer = styled.div`
  width: 1600px;
  height: 650px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  font-size: 80px;
  color: grey;
  &:hover {
    color: white;
  }
  a {
    cursor: pointer;
  }
`;

const places = [
  {
    name: "Dallangayan Oeste",
    img: image1,
  },
  {
    name: "Santiago Norte",
    img: image2,
  },
  {
    name: "Santiago Sur",
    img: image3,
  },
  {
    name: "Tanqui",
    img: image4,
  },
  {
    name: "Cabaroan",
    img: image5,
  },
];

const Main = () => {
  const [state, setState] = useState(places[0]);
  const ref = useRef(null);

  const handleHover = (item) => {
    setState(item);
  };

  const animation = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      ref.current.childNodes[0],
      { scale: 1 },
      { scale: 1.1, duration: 3 }
    );
  };

  useEffect(() => {
    console.log(ref.current.childNodes[0]);
  });

  useEffect(() => {
    animation();
  }, [state]);
  return (
    <>
      {" "}
      <Container>
        <SubContainer ref={ref}>
          <img src={state.img}></img>
          {places.map((item) => {
            return (
              <>
                <TextContainer onMouseOver={() => handleHover(item)}>
                  <a> {item.name}</a>
                </TextContainer>
              </>
            );
          })}
        </SubContainer>
      </Container>{" "}
    </>
  );
};

export default Main;
