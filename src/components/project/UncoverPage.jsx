import styled from "styled-components";

import SliderShow from "./SliderShow";
import { stackData } from "../../data/stackData";

const imageData = [
  "https://i.imgur.com/wslvLaW.png",
  "https://i.imgur.com/JeDoogF.png",
  "https://i.imgur.com/CR6fPrJ.png",
  "https://i.imgur.com/1p2d3TM.png",
  "https://i.imgur.com/It2YqO8.png",
  "https://i.imgur.com/lb1UUq6.png",
];

function TicatPage() {
  return (
    <TicatSection className="flex-all-center">
      <div className="project-image">
        <SliderShow images={imageData} />
      </div>
      <div className="project-info flex-v-center column">
        <span className="pj-num">PROJECT 02</span>
        <span className="pj-name">언커버 : uncover</span>
        <p>
          음악이 필요한 사용자에게 원하는 키워드를 통해 저작권 프리 음원을
          추천/제공하는 사이트 입니다. 반응형 css 및 Animation 동작구현 과 함께
          전반적인 UI/UX (figma)를 담당했으며, fullpage-scroll 라이브러리를 통한
          스크롤 페이지와 캐러셀 슬라이드, 리액트 훅 (useRef)을 이용한 음원 재생
          및 일시정지, 사운드 조정, 음원 바 및 API 를 이용한 서치 바 기능,
          코멘트 CRUD 서비스 제공 등을 도맡아 진행하였습니다.
        </p>
        <div>
          <button>💻 Web site</button>
          <button>Git Hub</button>
          <button>Figma</button>
        </div>
      </div>
    </TicatSection>
  );
}

export default TicatPage;

const TicatSection = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  line-height: 160%;

  .project-image {
    height: 100%;
    width: 35%;
  }
  .project-info {
    height: 70%;
    width: 50%;
    animation: showup 1s 0s forwards;
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
  }

  .pj-num {
    font-size: 2.3rem;
    font-family: "Lime";
    color: var(--main-color);
  }

  .pj-name {
    height: 40px;
    font-size: 2.5rem;
    font-family: "Lime";
    margin-top: 15px;
    text-transform: uppercase;
    padding-top: 10px;

    background: linear-gradient(
      to right bottom,
      var(--main-color),
      var(--sub-color) 60%
    );
    color: transparent;
    -webkit-background-clip: text;
  }

  p {
    word-break: keep-all;
    font-family: "KopubB";
    width: 65%;
    margin: 40px 0px 50px 0px;
    color: var(--main-text-color);
  }

  button {
    margin: 0px 15px 0px 0px;
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
  }

  button:hover {
    color: var(--btn-st-color);
    border: 1px solid rgb(143, 138, 226, 0.5);
    background-color: var(--btn-bg-color);
  }

  ul {
    width: 500px;
    display: flex;
    flex-wrap: wrap;
  }
  .skill-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "kopubB";
    color: #4c4c4c;
    font-size: 14px;
    border: 1px solid #0c0c0c;
    padding: 0px 15px;
    height: 25px;
    border-radius: 5px;
    margin: 5px 5px 5px 0px;
    background-color: #181a14;
    transition: all ease-in-out 0.3s;
  }

  .skill-icon > *:nth-child(1) {
    margin-right: 5px;
  }
`;
