import { atom } from "recoil";
import { FaHtml5 } from "react-icons/fa";

export const useStackDataState = atom({
  key: "skillData",
  default: {
    index: 1,
    name: "Html",
    icon: <FaHtml5 color="#f16528" />,
    contents:
      "표준과 웹 접근성을 준수하며 태그의 의미와 사용성을 알고 문서의 구조를 고려해 시맨틱하게 마크업할 수 있어요.",
    color: "#f16528",
    gauge: 100,
  },
});
