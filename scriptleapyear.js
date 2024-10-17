function isLeapYear(year) {

let leapyear;

if( year % 4 == 0 && year % 100 != 0 || (year % 400 == 0)){

leapyear = "True";
}
else{
leapyear = "False";
  }
  return leapyear;
}

console.log(isLeapYear(2020));