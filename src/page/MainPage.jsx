import styled from "styled-components";

import ShootingStar from "../components/ShootingStar";
import MainInfo from "../components/MainInfo";

function MainPage() {
  return (
    <MainSection className="flex-v-center">
      <ShootingStar />
      <BubbleEffect></BubbleEffect>
      <MainInfo />
    </MainSection>
  );
}

export default MainPage;

const MainSection = styled.section`
  position: relative;
  width: 100%;
  height: 200vh;
  color: var(--main-text-color);
  background-color: var(--main-bg-color);
  color: #fff;

  font-family: "KopubL";
`;

const BubbleEffect = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  background-color: rgba(255, 255, 255, 0.1);
  top: 0px;
  right: 0px;
  border-radius: 100%;
  animation: roundingMotion 1s infinite;

@keyframes roundingMotion {
  50%{
    transform:rotate(360deg)
    border-radius: 30%;
  }
}

`;
