const url = new URL(window.location.href); //new URL() : 현재주소(window.location.href)를 URL 객체로 만들어서 인덱스 값 쉽게 얻을 수 있음
const index = url.searchParams.get("index"); //url.searchParams : URL에서 ?뒤에 오는 인덱스값 -> 가져와서(get()) index 변수 저장

// data.json에서 편지 목록 불러오기
fetch("/data.json") //data.json에서 데이터 가져온다~
  .then((response) => response.json()) //.then 성공하면 응답(response) -> json데이터로 바꾼다(js 객체로 바뀌게)
  .then((letters) => {
    //response.json을 .then을 통해 letters로 받음
    const letter = letters[index]; // index번째 letters데이터 꺼냄

    document.querySelector(".Title").textContent = letter.title; //read.html에서 Title 클래스 텍스트를 letter데이터의 title로 변경
    document.querySelector(".Date").textContent = letter.date; //Date 클래스 텍스트를 letter데이터의 date로 변경
    document.querySelector(".letterContent").textContent = letter.content; //letterContent 클래스 텍스트를 letter데이터의 content로 변경
  });

document.getElementById("BackBtn").addEventListener("click", () => {
  location.href = "main.html";
});
