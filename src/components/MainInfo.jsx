import styled from "styled-components";

function MainInfo() {
  return (
    <InfoSection className="flex-all-center column">
      <SubTitle className="flex-all-center">
        <div>모두의 상상을 구현하는 </div>
        <div>
          <p>프론트엔드 개발자</p>
          <div className="under-bar">
            <div className="gauge-bar"></div>
          </div>
        </div>
      </SubTitle>
      <PortfolioTitle>
        <h1>
          <span>J</span>
          <span>U</span>
          <span>B</span>
          <span>E</span>
          <span>E</span>
          <br />
          <span>P</span>
          <span>O</span>
          <span>R</span>
          <span>T</span>
          <span>F</span>
          <span>O</span>
          <span>L</span>
          <span>I</span>
          <span>O</span>
        </h1>
      </PortfolioTitle>

      <div>
        <p className="top-text">
          디자인과 프론트엔드 개발을 좋아하는 김주비 입니다. 상상할수 있는것을
          구현하며,
          <br />더 나아가 누군가의 상상이 될수있는 프론트엔드 개발자가
          되고자합니다
        </p>
        <br />
        <br />
        <p className="bottom-text">
          * 본 페이지는 비상업적 목적의 개인포트폴리오 페이지입니다. <br />
        </p>
      </div>
    </InfoSection>
  );
}

export default MainInfo;

const InfoSection = styled.div`
  position: relative;
  width: 1000px;
  height: 100vh;
  z-index: 1;
  letter-spacing: -0.2px;
  text-align: center;
  animation: showup 1s 0s forwards;
  opacity: 0;

  .top-text {
    color: var(--text-color);
    line-height: 150%;
  }

  .bottom-text {
    color: var(--sub-text-color);
    line-height: 150%;
    text-transform: uppercase;
  }

  @keyframes showup {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

const SubTitle = styled.div`
  font-size: 35px;
  letter-spacing: -2px;

  div:nth-child(1) {
    color: var(--text-color);
  }

  div:nth-child(2) {
    position: relative;
    margin-left: 10px;
    color: var(--main-text-color);
    transition: 0.3s all ease-in-out;

    .under-bar {
      position: absolute;
      bottom: -10px;
      left: 0px;
      margin: 0px;
      width: 100%;
      height: 2px;
      background-color: rgba(255, 255, 255, 0.1);
    }
    .gauge-bar {
      width: 0%;
      height: 2px;
      background-color: var(--main-color);
      transition: 0.3s all ease-in-out;
    }
  }

  div:nth-child(2):hover {
    color: var(--main-color);

    .gauge-bar {
      width: 100%;
    }
  }
`;

const PortfolioTitle = styled.div`
  margin: 50px 0px;
  height: 270px;

  h1 span {
    position: relative;
    top: 5px;
    display: inline-block;
    font-size: 130px;
    animation: bounce 0.7s ease infinite alternate;
    text-shadow: 0 1px 0 #9eb5ff, 0 2px 0 #403ea4, 0 3px 0 #403ea4,
      0 4px 0 #403ea4, 0 5px 0 #403ea4;
    font-family: "촵";

    background: linear-gradient(
      to right bottom,
      var(--main-color) 40%,
      var(--sub-color) 90%
    );
    color: transparent;
    -webkit-background-clip: text;
  }

  h1 span:nth-child(2) {
    animation-delay: 0.1s;
  }
  h1 span:nth-child(3) {
    animation-delay: 0.2s;
  }
  h1 span:nth-child(4) {
    animation-delay: 0.3s;
  }
  h1 span:nth-child(5) {
    animation-delay: 0.4s;
  }
  h1 span:nth-child(6) {
    animation-delay: 0.5s;
  }
  h1 span:nth-child(7) {
    animation-delay: 0.6s;
  }
  h1 span:nth-child(8) {
    animation-delay: 0.7s;
  }

  h1 span:nth-child(9) {
    animation-delay: 0.8s;
  }
  h1 span:nth-child(10) {
    animation-delay: 0.9s;
  }
  h1 span:nth-child(11) {
    animation-delay: 1s;
  }
  h1 span:nth-child(12) {
    animation-delay: 1.1s;
  }

  h1 span:nth-child(13) {
    animation-delay: 1.2s;
  }
  h1 span:nth-child(14) {
    animation-delay: 1.3s;
  }
  h1 span:nth-child(15) {
    animation-delay: 1.4s;
  }

  @keyframes bounce {
    100% {
      top: -5px;
      text-shadow: 0 1px 0 var(--main-color), 0 2px 0 #403ea4, 0 3px 0 #403ea4,
        0 4px 0 #403ea4, 0 5px 0 #403ea4, 0 6px 0 #403ea4, 0 7px 0 #403ea4,
        0 8px 0 #403ea4, 0 9px 0 #403ea4, 0 50px 25px rgba(0, 0, 0, 0.2);
    }
  }
`;
