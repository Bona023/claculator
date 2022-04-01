let numOne = "";
let operator = "";
let numTwo = "";
const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");

//* 숫자 저장하기 (버튼 안의 문자를 가져와서 코드 줄이기)
const onClickNumber = (event) => {
    if (!operator) {
        numOne += event.target.textContent;
        $result.value += event.target.textContent;
        return;
    }
    //^ 이 아래로는 operator가 존재하는 경우에만 실행됨 => else 감쌀필요 없으므로 삭제
    if (!numTwo) {
        $result.value = ""; //^ numTwo에 값이 없을 때 numTwo를 입력하면 화면 비우기
    }
    numTwo += event.target.textContent;
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

document.querySelector("#calculate").addEventListener("click", () => {
    if (numTwo) {
        switch (operator) {
            case "+":
                $result.value = parseInt(numOne) + parseInt(numTwo); //^ 빼기, 곱하기, 나누기 연산자를 사용할 때에는 자동으로 문자열을 숫자로 바꾼 후 계산
                break;
            case "-":
                $result.value = numOne - numTwo;
                break;
            case "*":
                $result.value = numOne * numTwo;
                break;
            case "/":
                $result.value = numOne / numTwo;
                break;
            default:
                break;
        }
        $operator.value = "";
        numOne = $result.value;
        operator = "";
        numTwo = "";
    } else {
        alert("숫자를 먼저 입력하세요.");
    }
});

document.querySelector("#clear").addEventListener("click", () => {
    numOne = "";
    operator = "";
    numTwo = "";
    $operator.value = "";
    $result.value = "";
});
