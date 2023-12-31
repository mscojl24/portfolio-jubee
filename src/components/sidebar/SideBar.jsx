import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { navBtnData } from "../../data/navBtnData";
import { usePageNumberState } from "../../atom/navigate";
import { useRecoilState } from "recoil";

function SideBar() {
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useRecoilState(usePageNumberState);
  const [sideNum, setSideNum] = useState(1);
  const [sideText, setSideText] = useState("MAIN PAGE");

  console.log();

  const handlenavigate = (link, num, text) => {
    navigate(link);
    setPageNumber(num);
    setSideNum(num);
    setSideText(text);
  };

  useEffect(() => {
    setSideNum(pageNumber);
    setSideText(sideText);

    if (pageNumber === 1) {
      setSideText("MAINPAGE");
    } else if (pageNumber === 2) {
      setSideText("PROFILE");
    } else if (pageNumber === 3) {
      setSideText("TICAT");
    } else if (pageNumber === 4) {
      setSideText("UNCOVER");
    } else if (pageNumber === 5) {
      setSideText("ANISHOOL");
    } else if (pageNumber === 6) {
      setSideText("ENDPAGE");
    }

    const element = document.querySelector(".page-numbering");
    element.style.animation = "none";
    void element.offsetWidth; // reflow
    element.style.animation = `changeNum 0.5s forwards`;

    const name = document.querySelector(".page-text");
    name.style.animation = "none";
    void name.offsetWidth; // reflow
    name.style.animation = `changeText 1s forwards`;
  }, [pageNumber]);

  return (
    <SideBarSection className="flex-all-center column">
      <div className="page-numbering flex-all-center ">
        <p>0{pageNumber}</p>
      </div>
      <NavBtn className="flex-all-center column">
        <span className="page-text">{sideText}</span>
        <div className="nav-line"></div>
        {navBtnData.map((nav, index) => (
          <button
            key={index}
            onClick={() => {
              handlenavigate(nav.link, nav.number, nav.name);
            }}
            className={nav.number === sideNum ? "click-nav-btn" : "null"}
          ></button>
        ))}
      </NavBtn>
      <MouseIcon className="flex-all-center column">
        <div className="arrow-up"></div>
        <div className="mouse-body">
          <div className="mouse-wheel"></div>
        </div>
        <div className="arrow-down"></div>
      </MouseIcon>
    </SideBarSection>
  );
}

export default SideBar;

const SideBarSection = styled.nav`
  position: fixed;
  right: 70px;
  width: 120px;
  height: 100%;
  animation: sidebarshowup 1s forwards;
  opacity: 0;
  z-index: 3;

  .page-numbering {
    width: 100%;
    height: 120px;
    font-family: "촵";
    font-size: 70px;

    background: linear-gradient(
      to right bottom,
      var(--main-color) 10%,
      var(--sub-color)
    );
    color: transparent;
    -webkit-background-clip: text;
  }

  @keyframes changeNum {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
      transform: scale(1.1);
    }
  }

  @keyframes sidebarshowup {
    0% {
      transform: translateX(50px);
      opacity: 0;
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }
`;

const NavBtn = styled.div`
  position: relative;
  width: 100%;
  height: 60%;

  .nav-line {
    position: absolute;
    width: 2px;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
  }

  & > button {
    width: 5px;
    height: 5px;
    border-radius: 12px;
    border: 3px solid #929292;
    background-color: rgba(0, 0, 0, 0);
    margin: 20px;
    z-index: 1;
    transition: 0.3s all ease-in-out;
  }
  & > button:hover {
    border-color: #fff;
  }

  .click-nav-btn {
    width: 8px;
    height: 20px;
    border-color: var(--main-color);
    background-color: var(--main-color);
  }

  & > span {
    width: 100px;
    height: 20px;
    text-align: center;
    position: absolute;
    transform: rotate(90deg);
    right: -20px;
    text-transform: uppercase;
    opacity: 0.5;
  }

  @keyframes changeText {
    0% {
      opacity: 0;
      transform: rotate(90deg) translateX(-50px);
    }
    100% {
      opacity: 0.5;
      transform: rotate(90deg) translateX(0px);
    }
  }
`;
const MouseIcon = styled.div`
  width: 100%;
  height: 150px;

  .mouse-body {
    position: relative;
    width: 30px;
    height: 60px;
    border-radius: 70px;
    border: 3px solid #929292;
  }
  .mouse-wheel {
    position: absolute;
    width: 7px;
    height: 15px;
    background-color: #929292;
    border-radius: 10px;
    left: 50%;
    animation: wheel 2s 0s infinite;
    opacity: 0;
  }

  .arrow-down {
    width: 10px;
    height: 10px;
    border-right: 3px solid #929292;
    border-bottom: 3px solid #929292;
    margin-top: 10px;
    animation: arrow 2s 0s infinite;
    transform: rotate(45deg);
  }

  .arrow-up {
    width: 10px;
    height: 10px;
    border-right: 3px solid #929292;
    border-bottom: 3px solid #929292;
    margin: 10px;
    animation: arrow 2s 0s infinite;
    transform: rotate(225deg);
  }

  @keyframes wheel {
    0% {
      transform: translate(-50%, 15px);
      opacity: 0;
    }
    100% {
      transform: translate(-50%, 35px);
      opacity: 1;
    }
  }

  @keyframes arrow {
    50% {
      opacity: 0;
    }
  }
`;
