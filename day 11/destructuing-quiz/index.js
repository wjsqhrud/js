import { backendData } from "./data.js";

// backendData;

//1. id, curreny, money, phone만 콘솔로

const a = backendData.map(({ id, curreny, money, phone }) => ({
  id,
  curreny,
  money,
  phone,
}));
console.log(a);

//2. animallName-> {animal , car:{make,model,year}} 콘솔로

const b = backendData.map(
  ({
    animalName: animal,
    carmake: make,
    carMondel: model,
    carModelYear: year,
  }) => ({
    animal,
    car: { make, model, year },
  })
);
console.log(b);

//3. ipaddress가 맨마지막 세자리가 합이 10이하이면, id, color 만 콘솔로 찍기

const c = backendData
  .filter(({ ipAddress }) => {
    const ipArr = [...ipAddress];
    const lastDotIndex = ipArr.findLastIndex((v) => v === ".");
    const splicedArr = ipArr
      .splice(lastDotIndex + 1, ipArr.length)
      .map((v) => parseInt(v));
    const sum = splicedArr.reduce((a, c) => a + c);
    return sum <= 10;
  })
  .map(({ ipAddress, id, color }) => ({ ipAddress, id, color }));
console.log(c);

//4. timezone 이 알파벳 모음으로 시작하면, {timezone, carmake, phone 앞세리만 가져오기}
const d = backendData.map(({ timezone, carMake, phone }) => ({
  timezone,
  carMake,
  phone: phone.split("-")[0],
}));

//5. money가 50000엔 이하이면, phone[하이픈 제거], appName[대문자화하고]}

const e = backendData
  .filter(({ money }) => money <= 50000)
  .map(({ money, phone, appName }) => ({
    money,
    phone: phone.replaceAll("-", ""),
    appName: appName.toUpperCase(),
  }));
