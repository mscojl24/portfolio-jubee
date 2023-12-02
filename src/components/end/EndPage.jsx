import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";
import { TbBrandGithubFilled } from "react-icons/tb";

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
        <span>연락주세요!</span>
      </h2>

      <h3 className="flex-all-center column">
        <Bubble>
          <div className="speech-bubble">
            평일 · 주말 am 09:00 ~ pm 06:00 사이에 답변드릴게요
          </div>
        </Bubble>
        <div className="email-animation">
          <span>k</span>
          <span>i</span>
          <span>m</span>
          <span>j</span>
          <span>u</span>
          <span>b</span>
          <span>e</span>
          <span>e</span>
          <span>@</span>
          <span>g</span>
          <span>m</span>
          <span>a</span>
          <span>i</span>
          <span>l</span>
          <span>.</span>
          <span>c</span>
          <span>o</span>
          <span>m</span>
        </div>
        <ContactIcon className="flex-all-center">
          <button>
            <RiKakaoTalkFill /> 오픈채팅방 연결하기
          </button>
          <button>
            <TbBrandGithubFilled /> 깃허브 보러가기
          </button>
        </ContactIcon>
      </h3>
    </EndpageSection>
  );
}

export default EndPage;

const ContactIcon = styled.div`
  margin: 20px;
  width: 100%;

  button {
    margin: 40px 15px 0px 0px;
    font-family: "KopubB";
    font-size: 17px;
    /* color: var(--btn-st-color);
    border: 1px solid rgb(143, 138, 226, 0.5);
    background-color: var(--btn-bg-color); */
    color: #4c4c4c;
    border: 1px solid #0c0c0c;
    background-color: #181a14;
    padding: 7px 25px;
    border-radius: 5px;
    transition: 0.3s all ease-in-out;

    > *:nth-child(1) {
      margin-right: 5px;
      transform: translateY(3px);
    }
  }

  button:hover {
    color: var(--btn-st-color);
    border: 1px solid rgb(143, 138, 226, 0.5);
    background-color: var(--btn-bg-color);
  }
`;

const Bubble = styled.div`
  .speech-bubble {
    position: relative;
    background: #d8d8d8;
    border-radius: 0.4em;
    font-size: 20px;
    color: var(--sub-text-color);
    padding: 15px 40px;
    margin: 40px;
    font-family: "KopubB";
    letter-spacing: -1px;
  }
  .speech-bubble:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: #d8d8d8;
    border-bottom: 0;
    margin-left: -10px;
    margin-bottom: -10px;
  }
`;

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
      color: #bdc5f6;

      top: -5px;
      text-shadow: 0 1px 0 var(--main-color), 0 2px 0 #403ea4, 0 3px 0 #403ea4,
        0 4px 0 #403ea4, 0 5px 0 #403ea4, 0 50px 25px rgba(0, 0, 0, 0.2);

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

    &:nth-child(2) {
      color: #98a4ed;
    }
    &:last-child {
      color: var(--main-color);
      animation-delay: 0.5s;
    }
  }

  h2 {
    top: 50%;
    transform: translateY(-50%);
    position: absolute;

    span {
      animation-delay: 3.6s;
      -webkit-animation-fill-mode: forwards;

      &:first-child {
        animation-delay: 3.7s;
      }

      &:nth-child(2) {
        color: #98a4ed;
      }
      &:last-child {
        color: var(--main-color);
        animation-delay: 3.5s;
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

  /**--------------------------------------------- */

  h3 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    animation: showON 1s 6.5s forwards;
    opacity: 0;

    p {
      margin: 20px 0px;
      color: var(--sub-text-color);
    }
  }

  @keyframes showON {
    50% {
      transform: translateY(-50%) scale(1.1);
    }
    100% {
      opacity: 1;
    }
  }

  .email-animation > span {
    position: relative;
    top: 5px;
    display: inline-block;
    font-size: 80px;
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

  .email-animation span:nth-child(2) {
    animation-delay: 0.1s;
  }
  .email-animation span:nth-child(3) {
    animation-delay: 0.2s;
  }
  .email-animation span:nth-child(4) {
    animation-delay: 0.3s;
  }
  .email-animation span:nth-child(5) {
    animation-delay: 0.4s;
  }
  .email-animation span:nth-child(6) {
    animation-delay: 0.5s;
  }
  .email-animation span:nth-child(7) {
    animation-delay: 0.6s;
  }
  .email-animation span:nth-child(8) {
    animation-delay: 0.7s;
  }

  .email-animation span:nth-child(9) {
    animation-delay: 0.8s;
  }
  .email-animation span:nth-child(10) {
    animation-delay: 0.9s;
  }
  .email-animation span:nth-child(11) {
    animation-delay: 1s;
  }
  .email-animation span:nth-child(12) {
    animation-delay: 1.1s;
  }

  .email-animation span:nth-child(13) {
    animation-delay: 1.2s;
  }
  .email-animation span:nth-child(14) {
    animation-delay: 1.3s;
  }
  .email-animation span:nth-child(15) {
    animation-delay: 1.4s;
  }
  .email-animation span:nth-child(16) {
    animation-delay: 1.5s;
  }
  .email-animation span:nth-child(17) {
    animation-delay: 1.6s;
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
