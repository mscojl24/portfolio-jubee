import styled from "styled-components";

import ShootingStar from "../components/ShootingStar";
import MainInfo from "../components/MainInfo";
import SideBar from "../components/sidebar/SideBar";

function MainPage() {
  return (
    <MainSection className="flex-v-center">
      <ShootingStar />
      <BubbleEffect top="-250px" right="50px"></BubbleEffect>
      <BubbleEffect top="50px" right="-200px" second="7"></BubbleEffect>
      <BubbleEffect top="500px" left="-150px" second="5"></BubbleEffect>
      <BubbleEffect top="800px" left="100px" w="400" h="400"></BubbleEffect>
      <SideBar />
      <MainInfo />
    </MainSection>
  );
}

export default MainPage;

const MainSection = styled.section`
  overflow: hidden;
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
  width: ${(props) => props.w || "500"}px;
  height: ${(props) => props.h || "500"}px;
  background-color: rgba(191, 187, 255, 0.05);
  top: ${(props) => props.top || "auto"};
  right: ${(props) => props.right || "auto"};
  left: ${(props) => props.left || "auto"};
  border-radius: 48%;
  animation: roundingMotion ${(props) => props.second || "3"}s infinite linear;

  @keyframes roundingMotion {
    50% {
      transform: rotate(180deg) scale(1.1);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
