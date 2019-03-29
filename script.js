const squares = document.querySelectorAll('.square')
const title = document.querySelector('p')
const resetButton = document.querySelector('.resetButton')
let acc=0;
let newArray=[];

squares.forEach(ele=>{ele.addEventListener('click',()=>{
  if(ele.childNodes[0].nodeValue === "X"){return}
  if(ele.childNodes[0].nodeValue === "O"){return}
  if(acc%2===0){ele.innerHTML = "O";acc++;ele.nodeValue="O"; ele.style.background='red'}
  else {ele.innerHTML = "X";acc++;ele.style.background='lightblue'}
victory();
})
})

resetButton.addEventListener('click', function clear () {
  acc=0;squares.forEach((ele)=>{ele.style.background='white';return ele.innerHTML="-"; })
})

function victory(){
// Xs
  if(squares[0].childNodes[0].nodeValue==="X" && squares[1].childNodes[0].nodeValue==="X" && squares[2].childNodes[0].nodeValue==="X"){
    title.textContent= "The Xs Win!!"; squares.forEach((ele)=>{ele.style.background='white';return ele.innerHTML="-"; })
  }

  else if(squares[3].childNodes[0].nodeValue==="X" && squares[4].childNodes[0].nodeValue==="X" && squares[5].childNodes[0].nodeValue==="X"){
    title.textContent= "The Xs Win!!"; squares.forEach((ele)=>{ele.style.background='white';return ele.innerHTML="-"})
  }

  else if(squares[6].childNodes[0].nodeValue==="X" && squares[7].childNodes[0].nodeValue==="X" && squares[8].childNodes[0].nodeValue==="X"){
    title.textContent= "The Xs Win!!"; squares.forEach((ele)=>{ele.style.background='white';return ele.innerHTML="-"})
  }

  else if(squares[0].childNodes[0].nodeValue==="X" && squares[3].childNodes[0].nodeValue==="X" && squares[6].childNodes[0].nodeValue==="X"){
    title.textContent= "The Xs Win!!"; squares.forEach((ele)=>{ele.style.background='white';return ele.innerHTML="-"})
  }

  else if(squares[1].childNodes[0].nodeValue==="X" && squares[4].childNodes[0].nodeValue==="X" && squares[7].childNodes[0].nodeValue==="X"){
    title.textContent= "The Xs Win!!"; squares.forEach((ele)=>{ele.style.background='white';return ele.innerHTML="-"})
  }

  else if(squares[2].childNodes[0].nodeValue==="X" && squares[5].childNodes[0].nodeValue==="X" && squares[8].childNodes[0].nodeValue==="X"){
    title.textContent= "The Xs Win!!"; squares.forEach((ele)=>{ele.style.background='white';return ele.innerHTML="-"})
  }

  else if(squares[2].childNodes[0].nodeValue==="X" && squares[4].childNodes[0].nodeValue==="X" && squares[6].childNodes[0].nodeValue==="X"){
    title.textContent= "The Xs Win!!"; squares.forEach((ele)=>{ele.style.background='white';return ele.innerHTML="-"})
  }

  else if(squares[0].childNodes[0].nodeValue==="X" && squares[4].childNodes[0].nodeValue==="X" && squares[8].childNodes[0].nodeValue==="X"){
    title.textContent= "The Xs Win!!"; squares.forEach((ele)=>{ele.style.background='white';return ele.innerHTML="-"})
  }

  // Os
  else if(squares[0].childNodes[0].nodeValue==="O" && squares[1].childNodes[0].nodeValue==="O" && squares[2].childNodes[0].nodeValue==="O"){
    title.textContent= "The Os Win!!"; squares.forEach((ele)=>{ele.style.background='white'; return ele.innerHTML="-"})
  }

  else if(squares[3].childNodes[0].nodeValue==="O" && squares[4].childNodes[0].nodeValue==="O" && squares[5].childNodes[0].nodeValue==="O"){
    title.textContent= "The Os Win!!"; squares.forEach((ele)=>{ele.style.background='white';return ele.innerHTML="-"})
  }

  else if(squares[6].childNodes[0].nodeValue==="O" && squares[7].childNodes[0].nodeValue==="O" && squares[8].childNodes[0].nodeValue==="O"){
    title.textContent= "The Os Win!!"; squares.forEach((ele)=>{ele.style.background='white';return ele.innerHTML="-"})
  }

  else if(squares[0].childNodes[0].nodeValue==="O" && squares[3].childNodes[0].nodeValue==="O" && squares[6].childNodes[0].nodeValue==="O"){
    title.textContent= "The Os Win!!"; squares.forEach((ele)=>{ele.style.background='white';return ele.innerHTML="-"})
  }

  else if(squares[1].childNodes[0].nodeValue==="O" && squares[4].childNodes[0].nodeValue==="O" && squares[7].childNodes[0].nodeValue==="O"){
    title.textContent= "The Os Win!!"; squares.forEach((ele)=>{ele.style.background='white';return ele.innerHTML="-"})
  }

  else if(squares[2].childNodes[0].nodeValue==="O" && squares[5].childNodes[0].nodeValue==="O" && squares[8].childNodes[0].nodeValue==="O"){
    title.textContent= "The Os Win!!"; squares.forEach((ele)=>{ele.style.background='white';return ele.innerHTML="-"})
  }

  else if(squares[2].childNodes[0].nodeValue==="O" && squares[4].childNodes[0].nodeValue==="O" && squares[6].childNodes[0].nodeValue==="O"){
    title.textContent= "The Os Win!!"; squares.forEach((ele)=>{ele.style.background='white';return ele.innerHTML="-"})
  }

  else if(squares[0].childNodes[0].nodeValue==="O" && squares[4].childNodes[0].nodeValue==="O" && squares[8].childNodes[0].nodeValue==="O"){
    title.textContent= "The Os Win!!"; squares.forEach((ele)=>{ele.style.background='white';return ele.innerHTML="-"})
  }
}

