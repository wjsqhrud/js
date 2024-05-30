// 클라이언트[프론트엔드] <-> 서버[백엔드]
// http방식으로 데이터를 주고 받음
// (원칙) 1. stateLess[request//repsonse]
// 2. 쿠키, 세션, JWT
//  -1. 무신사 들어옴
//  -2. 로그인을 함[쿠키, 세션, JWT 받음]
// 3.restful api
// (/webtoon/list/monday/id=1234
// ./netfilx/best /id=293829)

// const data = fetch("https://fakerapi.it/api/v1/addresses?_quantity=10");
// data.then((v) => v.json()).then((v) => console.log(v));

// const data1 = fetch("https://fakerapi.it/api/v1/companies?_quantity=20");
// data1.then((v) => v.json()).then((v) => console.log(v));

//퀴즈 책 20권 가져와서 카드형태로..
// card - image, title, author, description,

// {
//   "id": 1,
//   "title": "White Rabbit.",
//   "author": "Burnice Jast",
//   "genre": "Laudantium",
//   "description": "NOT be an old Turtle--we used to it as she could, and soon found herself falling down a very poor speaker,' said the King, 'that only makes the matter with it. There could be no doubt that it felt.",
//   "isbn": "9797790540847",
//   "image": "http://placeimg.com/480/640/any",
//   "published": "2024-01-03",
//   "publisher": "Velit Dolorem"
// }

const bookdata = fetch("https://fakerapi.it/api/v1/books?_quantity=20");
// data.then((v) => v.json()).then((v) => console.log(v.data));
// https://picsum.photos/200
//1. 이미지주소, title, 작가(au), des

bookdata
  .then((v) => v.json())
  .then((dataObject) => {
    // const bookContainer = document.createElement("div");
    console.log(dataObject.data);
    //author, title,
    const bookContainer = document.querySelector(".book__container");
    dataObject.data.forEach(({ title, author, description }) => {
      console.log(title, author, description);
      const inserHTML = `
      <div class="book__container__card">
        <div class="book__container__card__imgBox">
          <img src="https://picsum.photos/200" alt="" />
        </div>
        <div class="book__container__card__infoBox">
          <p class="title">${title}
          </p>
          <p class="author">${author}</p>
          <p class="description">${description}</p>
        </div>
      </div>
      `;

      bookContainer.insertAdjacentHTML("beforeend", inserHTML);
    });
  });
