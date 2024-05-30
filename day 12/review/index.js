const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

const kim = { name: "김민재", age: 27, position: "center back" };
const { name: koreaName, position: soccerPosition } = kim;

// const koreaDefender = {
//   koreaName: koreaName,
//   soccerPosition: soccerPosition,
// }
const koreaDefender = {
  koreaName,
  soccerPosition,
};

console.log(koreaDefender);

//1.기본적으로 변수명 바꾸기,renaming]
const renamedUsers = users.map((id: userId, name: userName, age: userAge) => ({
  userId,
  userName,
  userAge,
}));
