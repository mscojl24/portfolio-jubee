import styled from "styled-components";

function SideBar() {
  return (
    <SideBarSection className="flex-all-center column">
      <div className="page-numbering flex-all-center ">
        <p>01</p>
      </div>
      <NavBtn className="flex-all-center column">
        <span>Main Page</span>
        <div className="nav-line"></div>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </NavBtn>
      <MouseIcon className="flex-all-center column">
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
    width: 15px;
    height: 15px;
    border-radius: 12px;
    border: 5px solid #929292;
    background-color: rgba(0, 0, 0, 0);
    margin: 6px;
    z-index: 1;
    transition: 0.3s all ease-in-out;
  }
  & > button:hover {
    border-color: #fff;
  }

  & > span {
    position: absolute;
    transform: rotate(90deg);
    right: -20px;
    text-transform: uppercase;
    opacity: 0.5;
  }
`;
const MouseIcon = styled.div`
  width: 100%;
  height: 120px;

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
