import styled from "styled-components";

function EndPage() {
  return (
    <EndpageSection className="container flex-all-center">
      <h1 class="title">
        <span>제 포트폴리오</span>
        <span>재미있게</span>
        <span>감상하셨나요?</span>
      </h1>

      <h2 class="title">
        <span>그렇다면</span>
        <span>이쪽으로</span>
        <span>연락주세요</span>
      </h2>
    </EndpageSection>
  );
}

export default EndPage;

const EndpageSection = styled.section`
  width: 80%;
  height: 100%;
  position: relative;

  h1,
  h2 {
    font-size: 100px;
    text-transform: uppercase;
    font-family: "촵";
    text-align: center;

    span {
      width: 100%;
      float: left;
      padding: 5px;

      background: linear-gradient(
        to right bottom,
        var(--main-color),
        var(--sub-color) 90%
      );
      color: transparent;
      -webkit-background-clip: text;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
      transform: translateY(-50px);
      opacity: 0;
      animation-name: titleAnimation;
      animation-timing-function: ease;
      animation-duration: 3s;
    }
  }
  h1 span {
    animation-delay: 0.6s;
    -webkit-animation-fill-mode: forwards;

    &:first-child {
      animation-delay: 0.7s;
    }

    &:last-child {
      /* color: #ffe221; */
      animation-delay: 0.5s;
    }
  }

  h2 {
    top: 50%;
    transform: translateY(-50%);
    position: absolute;

    span {
      animation-delay: 4.1s;
      -webkit-animation-fill-mode: forwards;

      &:first-child {
        animation-delay: 4.2s;
      }

      &:last-child {
        /* color: #ffe221; */
        animation-delay: 4s;
      }
    }
  }

  .usechrome {
    font-size: 10px;
    color: #fff;
    font-family: helvetica, arial;
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
    left: 0;
  }

  @keyframes titleAnimation {
    0% {
      transform: translateY(-50px);
      opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    }
    20% {
      transform: translateY(0);
      opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    }
    80% {
      transform: translateY(0);
      opacity: 1;
      -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
      clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    }
    100% {
      transform: translateY(50px);
      opacity: 0;
      -webkit-clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
      clip-path: polygon(100% 0, 100% -0%, 0 100%, 0 100%);
    }
  }
`;
