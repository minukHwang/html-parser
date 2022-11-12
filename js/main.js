import "../scss/main.scss";

let submitButton = document.getElementById("btn");
let userInput = document.getElementById("user-input");
let tag = [];

// 입력받은 데이터 정렬
const setup = () => {
  let userValue = userInput.value;
  let tagstart = 0;
  let tagend = 0;
  for (let i = 0; i < userValue.length; i++) {
    if (userValue[i] === "<") {
      tagstart = i;
    } else if (userValue[i] === ">") {
      tagend = i;
      tag.push(userValue.slice(tagstart, tagend + 1));
    }
  }
  console.log(tag);
};

//tag 추출
const getTagName = (text) => {
  let start = 0;
  let end = 0;
  let tagname = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "<") {
      start = i + 1;
    } else if (text[i] === " " || text[i] === ">") {
      end = i;
      tagname = text.slice(start, end);
      break;
    }
  }
  return tagname;
};

// 어트리뷰트 이름 추출
const getAttributeName = (text) => {
  let attrstart = 0;
  let attrend = 0;
  let namestart = 0;
  let nameend = 0;
  let attrs = [];
  let attribute = "";
  let attributeName = "";

  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      namestart = i + 1;
    } else if (text[i] === "=") {
      nameend = i;
      attributeName = text.slice(namestart, nameend);
    }

    if (text[i] === '"' && text[i - 1] === "=") {
      attrstart = i + 1;
    } else if (
      text[i] === '"' &&
      (text[i + 1] === " " || text[i + 1] === ">")
    ) {
      attrend = i;
      attribute = text.slice(attrstart, attrend);
      attrs.push({
        attributeName: attributeName,
        attribute: attribute,
      });
    }
  }
  return attrs;
};

//오픈인지 닫는 태그인지 판별
const isTagClosed = (text) => {
  if (text[1] === "/") {
    return true;
  } else if (text[text.length - 2] === "/") {
    return true;
  } else {
    return false;
  }
};

//노드 연결
const setNode = () => {};

//클릭 이벤트
const play = () => {
  setup();
  setNode();
  let tagname = getTagName(tag[0]);
  console.log(tagname);
  let attr = getAttributeName(tag[0]);
  console.log(attr);
  let isClosed = isTagClosed(tag[0]);
  console.log(isClosed);
};

submitButton.addEventListener("click", play);
