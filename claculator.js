let numOne = "";
let operate = "";
let nemTwo = "";
const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");

//* 숫자 저장하기 (버튼 안의 문자를 가져와서 코드 줄이기)
const onClickNumber = (event) => {
    if (operator) {
        numTwo += event.target.textContent;
    } else {
        numOne += event.target.textContent;
    }
    $result.value += event.target.textContent;
};
document.querySelector("#num-0").addEventListener("click", onClickNumber);
document.querySelector("#num-1").addEventListener("click", onClickNumber);
document.querySelector("#num-2").addEventListener("click", onClickNumber);
document.querySelector("#num-3").addEventListener("click", onClickNumber);
document.querySelector("#num-4").addEventListener("click", onClickNumber);
document.querySelector("#num-5").addEventListener("click", onClickNumber);
document.querySelector("#num-6").addEventListener("click", onClickNumber);
document.querySelector("#num-7").addEventListener("click", onClickNumber);
document.querySelector("#num-8").addEventListener("click", onClickNumber);
document.querySelector("#num-9").addEventListener("click", onClickNumber);

//* 연산자 저장하기 (고차함수 연습)
const onClickOperator = (op) => () => {
    if (numOne) {
        operator = op;
        $operator.value = op;
    } else {
        alert("숫자를 먼저 입력해주세요.");
    }
};
document.querySelector("#plus").addEventListener("click", onClickOperator("+"));
document.querySelector("#minus").addEventListener("click", onClickOperator("-"));
document.querySelector("#divide").addEventListener("click", onClickOperator("/"));
document.querySelector("#multiply").addEventListener("click", onClickOperator("*"));
