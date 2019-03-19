const squares = document.querySelectorAll('.square')
let acc=0;
let newArray=[];

squares.forEach(ele=>{ele.addEventListener('click',()=>{
  if(acc%2===0){ele.innerHTML = "O";acc++}
  else {ele.innerHTML = "X";acc++}
})
console.log(victory());
})

function victory (){
  const newsquares = document.querySelectorAll('.square')
console.log(newsquares.forEach((ele)=>{return ele.textContent}))
}
