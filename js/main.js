import "../scss/main.scss";

class Node {
  constructor({ children, nodeDetail }) {
    this.children = children;
    this.nodeDetail = nodeDetail;
  }

  getID() {
    return this.attributes["id"];
  }

  getClasses() {
    return this.attributes["class"];
  }
}

function createText() {
  return new Node({ children: [], nodeDetail: data });
}

class HtmlParser {
  constructor() {
    this.input = input;
    this.position = position;
  }

  // 현재 position에 있는 문자를 반환하는 메소드
  getCharacter() {
    return this.input[this.position];
  }

  // 현재 position에서부터의 문자열들이 파라미터 문자열 str 로 시작하는지 판단하는 메소드
  isStartWith() {
    const characterArray = Array.from(str);
    let currentPosition = this.position;

    return characterArray.every((character) => {
      return this.input[currentPosition++] === character;
    });
  }

  // 현재 position이 input의 끝을 가리키는지 판단하는 메소드
  isEndOfInput() {
    return this.position >= this.input.length;
  }
}

// 이외 type의 노드들(Element)을 만드는 메소드
// 추가적으로 attrs(속성), children(자식노드)를 갖는다.
function createElement() {
  return new KarlNode({
    children,
    nodeDetail: new KarlElement({ tagName: name, attributes: attrs }),
  });
}

let submitButton = document.getElementById("btn");
let userInput = document.getElementById("user-input");

const play = () => {
  let userValue = userInput.value;
  console.log(userValue);
};

submitButton.addEventListener("click", play);
