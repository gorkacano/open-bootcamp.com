const today = new Date();
console.log(today);

const birthdate = new Date(1984, 05, 20);
console.log(birthdate);

const todayLatestThanBirthday = (today > birthdate);
console.log(todayLatestThanBirthday);

const birthday = birthdate.getDate();
console.log(birthday);

const birthMonth = birthdate.getMonth();
console.log(birthMonth);

const birthYear = birthdate.getFullYear();
console.log(birthYear);

