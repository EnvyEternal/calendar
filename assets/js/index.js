
let board = document.querySelector('.container');
const NUMBER = 35;
const date = 31;
window.onload = onLo;

function onLo(){
    const boxes = document.querySelector('.boxes')
   let x = 1
   for(let i = 0; i<=33;i++, x++)
   {
        const newBox = boxes.cloneNode(true)
       board.append(newBox)}
      // boxes.innerHTML = x


    //for(let x of boxes){
    const box = document.querySelectorAll('.boxes')
    let a = 0
       for(let z = 0;z<=30;z++){
           a++
           box[z].innerHTML = a 
       }
}
