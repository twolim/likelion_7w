document.getElementById("BackBtn").addEventListener("click", () => {
  location.href = "main.html";
});

const today = new Date();
const year = today.getFullYear();
let month = today.getMonth() + 1; //let은 재할당 가능해서 조건문쓰는 애들만 let사용
let date1 = today.getDate();

if (month < 10) {
  //10이하 월에 0붙이기 위한 조건문..
  month = "0" + month;
}

if (date1 < 10) {
  date1 = "0" + date;
}

const date = (document.querySelector(
  ".Date"
).textContent = `${year}.${month}.${date1}`);

function Input() {
  const title = document.getElementById("Title").value;
  const content = document.getElementById("ContentInput").value;

  console.log("제목:", title);
  console.log("날짜:", date);
  console.log("내용:", content);

  const newLetter = { title, content, date }; //변수명 read.js에 적은거랑 통일하니까 돌아간다ㅜㅜㅜ
  const newStored = localStorage.getItem("newLetters"); //로컬 스토리지에 저장된 newLetters의 값 불러오기 (write.js)
  const newLetters = newStored ? JSON.parse(newStored) : []; //newStored 있으면 문자열 -> 배열(객체)로 변환 || 없으면 [] 빈 배열

  newLetters.push(newLetter); //배열 끝에 newLetter push
  localStorage.setItem("newLetters", JSON.stringify(newLetters)); //newLetters 다시 문자열(stringify)로 로컬 스토리지에 저장

  location.href = "main.html";
}
