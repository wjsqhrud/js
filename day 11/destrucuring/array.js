//[jdestructuring]:분해 > array.js

const days = ["월", "화", "수", "목", "금", "토", "일"];

const [monday, ...rest] = days;

const [a, b, c, ...rest] = days;
const [a1, b1, c1, rest1] = days;
