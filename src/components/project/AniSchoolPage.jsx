import styled from "styled-components";

import SliderShow from "./SliderShow";
import { anischoolBtn } from "../../data/urlData";

const imageData = [
  "https://i.imgur.com/tfRjG11.png",
  "https://i.imgur.com/KVWozWR.png",
  "https://i.imgur.com/r126TQG.png",
  "https://i.imgur.com/EukRj4A.png",
  "https://i.imgur.com/D0lVLFn.png",
];

function TicatPage() {
  const handleExternalLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <TicatSection className="flex-all-center">
      <div className="project-image">
        <SliderShow images={imageData} />
      </div>
      <div className="project-info flex-v-center column">
        <span className="pj-num">PROJECT 03</span>
        <span className="pj-name">애니스쿨 : ani school</span>
        <p>
          첫 리액트를 배울 당시 동기와 함께 현재 사용할수있는 스텍들을
          점검해보며 같은 부트캠프 동기들에게 재미를 줄만한 간단한 프로젝트를
          만들고자 시작한 토이프로젝트 입니다. 전반적인 UI/UX 디자인과 함께
          사이트내에서 사용된 캐릭터 작업을 도맡아 진행했습니다. 화려한 기능이나
          기술은 담지 못하였으나, 첫 리액트 작품이였던 만큼 컨포넌트 모듈화에
          대해 심도깊게 고민하며 협업에서 중요한 git flow 전략을 주도적으로
          배워볼수 있었던 프로젝트로,기초적인 스텍을 쌓아가기에 가장 많은 도움이
          된 작품입니다.
        </p>{" "}
        <div>
          {anischoolBtn.map((url, idx) => (
            <button
              key={idx}
              onClick={() => {
                handleExternalLink(url.url);
              }}
            >
              {url.icon} {url.name}
            </button>
          ))}
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
