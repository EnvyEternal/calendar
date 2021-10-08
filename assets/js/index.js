
let board = document.querySelector('.container');
const boxes = document.querySelector('.boxes');
const addDays = document.querySelectorAll('.days')
const datePage = document.querySelector('.date')
<<<<<<< HEAD
const date = new Date()
const fullDay = date.getDate()  + '.' + date.getMonth() + '.' + date.getFullYear();
const day = date.getDate()
/*const obj = {
=======
let date = new Date()
let day = date.getDay()
const obj = {
>>>>>>> fa93ebdfe71bfb6059c08e68ce9f7d51a14ff702
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,

   
<<<<<<< HEAD
}*/
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
=======
}
>>>>>>> fa93ebdfe71bfb6059c08e68ce9f7d51a14ff702
const NUMBER = 35;
const allDay = 31;
const arrDays = ['S', 'F', 'T', 'W', 'T', 'M', 'S']
window.onload = onLo;


function onLo(){
<<<<<<< HEAD
    //datePage.innerHTML = day
    const numMonth = date.getMonth()
    let nameMonth = month[numMonth]
    datePage.innerHTML = nameMonth
   const numberDay = document.createElement('div')
   numberDay.innerHTML = fullDay
   datePage.append(numberDay)
   

    
=======
    //const addDays = document.querySelectorAll('.days')
    datePage.innerHTML = day
>>>>>>> fa93ebdfe71bfb6059c08e68ce9f7d51a14ff702
//Создание Дней Недели
for(let f = 0; f<=6;f++){
    let day = arrDays[f]
    const days = document.createElement('div')
    days.classList.add('days')
    days.innerHTML = arrDays[f]
    board.prepend(days)
   
}
   //Клонирование ячеек дат
   
for(let i = 0; i<=33;i++)
    {
        const newBox = boxes.cloneNode(true)
        board.append(newBox)
    }
    //Добовление в ячейки чисел  
    const box = document.querySelectorAll('.boxes')
    let a = 0
for(let z = 0;z<=30;z++)
    {
        a++
        box[z].innerHTML = a 
        if(day==z){
            box[z-1].classList.add('active')
        }
    }
<<<<<<< HEAD
=======

    
}
>>>>>>> fa93ebdfe71bfb6059c08e68ce9f7d51a14ff702


}