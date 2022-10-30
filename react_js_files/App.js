import { useState, useEffect } from "react";
function helper1(time) {
  let hours = time.getHours().toString()
  let minutes = time.getMinutes().toString()
  let seconds = time.getSeconds().toString()
  if (hours.length == 1) {
    hours = "0"+hours;
  }
  if (minutes.length == 1) {
    minutes = "0"+minutes;
  }
  if (seconds.length == 1) {
    seconds = "0"+seconds;
  }
  return hours+":"+minutes+":"+seconds;
}
function helper2(time) {
  let year = time.getFullYear().toString();
  let month = time.getMonth();
  let day = time.getDate();
  const Months = ["Январь", "Февраль", "Март", "Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]
  let dayOfWeek = time.getDay();
  const Days = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"]
  dayOfWeek = Days[dayOfWeek]
  month = Months[month]
  return month+" "+day+", "+year +" ("+dayOfWeek+")"  //Октябрь 22, 2022
}
function App() {
  const [timeT, setTimeT] = useState("");
  const [dateT, setDateT] = useState("");
  let interval = setInterval(()=>{
  let time = new Date();
  let stroka1 = helper1(time);
  let stroka2 = helper2(time);
  setTimeT(stroka1)
  setDateT(stroka2)

  }, 1000)
   
const timeStyle = {
  color: 'blue',
  textSize: 'xxx-large',
  fontSize: '40'
}
  return (
  <div>
      <span style={timeStyle}>{timeT}</span>
      <div></div>
      <span>{dateT}</span>
  </div>
  );
}

export default App;