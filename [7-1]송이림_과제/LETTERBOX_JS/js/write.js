document.getElementById("BackBtn").addEventListener("click", () => {
  location.href = "main.html";
});

const today = new Date();
const year = today.getFullYear();
let month = today.getMonth() + 1; //let은 재할당 가능해서 조건문쓰는 애들만 let사용
let date = today.getDate();

if (month < 10) {
  //10이하 월에 0붙이기 위한 조건문..
  month = "0" + month;
}

if (date < 10) {
  date = "0" + date;
}

const day = (document.querySelector(
  ".Date"
).textContent = `${year}.${month}.${date}`);

const title = document.getElementById("Title").value; //.value : 입력값 받으려면 안붙이니까 오류나서 붙여야함!
const contentInput = document.getElementById("ContentInput").value;

function Input() {
  const title = document.getElementById("Title").value;
  const contentInput = document.getElementById("ContentInput").value;

  console.log("제목:", title);
  console.log("날짜:", day);
  console.log("내용:", contentInput);
}
