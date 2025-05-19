fetch("/data.json") // fetch() : data.json파일 가져올 수 있는 명령어어
  .then((response) => response.json())
  .then((data) => {
    //.then : fetch()가 성공하면 결과를 response 변수로 받음. 뒤에 .json은 받아온 데이터를 js에서 이해 가능하게
    const wrapper = document.querySelector(".LetterWrapper"); //main.html에서 LetterWrapper 클래스 찾아서 wrapper에 저장
    wrapper.innerHTML = ""; // html에서 기존 내용 비우기

    data.forEach((letter, index) => {
      //노션 참조! forEach문 : 배열 각 요소 반복적 실행,
      const letterDiv = document.createElement("div"); //새 div 만들어줌(반복문이라)
      letterDiv.className = "Letter"; //div 안에 Letter클래스 붙이면 css도 적용
      letterDiv.textContent = letter.title; //letterDiv에 텍스트 추가 -> letter의 title만!

      letterDiv.onclick = () => {
        // letterDiv 클릭하면...
        window.location.href = `read.html?index=${index}`;
      }; //현재 페이지 주소(window.location.href)를 read.html로 이동해라(근데 index값도 갖고 가라)

      wrapper.appendChild(letterDiv); //wrapper의 자식 letterDiv, wrapper는 html클래스 LetterWrapper이니까 화면에 나타나게하는거임
    });
  });
