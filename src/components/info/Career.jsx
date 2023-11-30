import styled from "styled-components";

function Career() {
  return (
    <CareerSection>
      <ProfileBox>
        <table>
          <tr>
            <td>생년월일</td>
            <td>
              <span className="comp-duty">1994.04.14</span>
            </td>
          </tr>
          <tr>
            <td>전화번호</td>
            <td>
              <span className="comp-duty">+82 010.6818.0600</span>
            </td>
          </tr>
          <tr>
            <td>kakao</td>
            <td>
              <span className="comp-duty">mscojl24</span>
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <span className="comp-duty">kimjubee@gmail.com</span>
            </td>
          </tr>
          <tr>
            <td>자격증</td>
            <td>
              <span className="comp-duty">
                웹디자인기능사
                <br />
                <br />
                GTQ 1급
                <br />
                <br />
                2종보통 운전면허
              </span>
            </td>
          </tr>
        </table>
      </ProfileBox>
      <h2>Career</h2>
      <TimeLine>
        <table>
          <tr>
            <td>13.02</td>
            <td>
              <span className="comp-name">울산 생활과학 고등학교</span>
              <span className="comp-duty"> 졸업</span>
            </td>
          </tr>
          <tr>
            <td>16.03 ~ 17.05</td>
            <td>
              <span className="comp-name">우진통상(TROIKA)</span>
              <span className="comp-duty"> 웹 퍼블리셔</span>
            </td>
          </tr>
          <tr>
            <td>17.07 ~ 20.04</td>
            <td>
              <span className="comp-name">대광산업</span>
              <span className="comp-duty">회계/관리</span>
            </td>
          </tr>
          <tr>
            <td>20.04 ~ 22.01</td>
            <td>
              <span className="comp-name">키다리스튜디오</span>
              <span className="comp-duty">웹툰작가</span>
            </td>
          </tr>
          <tr>
            <td>22.02 ~ 22.11</td>
            <td>
              <span className="comp-name">별하길동무</span>
              <span className="comp-duty"> 웹 디자이너</span>
            </td>
          </tr>
          <tr>
            <td>22.12 ~ 23.07</td>
            <td>
              <span className="comp-name">국비지원 부트캠프 (프론트엔드)</span>
              <span className="comp-duty"> 수료</span>
            </td>
          </tr>
        </table>
      </TimeLine>
    </CareerSection>
  );
}

export default Career;

const CareerSection = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  .category-name {
    font-size: 20px;
    font-family: "촵";
  }

  h2 {
    font-size: 20px;
    font-family: "KopubB";
    margin-top: 50px;
  }
`;

const TimeLine = styled.div`
  margin-top: 40px;
  tr {
    height: 40px;

    > td:nth-child(2n-1) {
      font-family: "kopubB";
      width: 120px;
      font-size: 12px;
    }

    .comp-name {
      font-family: "KopubB";
      color: var(--text-color);
      font-size: 15px;
    }

    .comp-duty {
      margin-left: 10px;
      font-size: 15px;
    }
  }
`;

const ProfileBox = styled(TimeLine)`
  tr {
    height: 30px;

    > td:nth-child(2n-1) {
      font-size: 15px;
    }

    .comp-duty {
      margin: 0px;
    }
  }
`;
