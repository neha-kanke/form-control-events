const cl=console.log


const username1=document.getElementById('username');


const onusername=(e)=>{
    e.target.style.border='3px solid red'
}

const onbrul=(eve)=>{
eve.target.style.border='2px solid black'
}
const onkey=(e)=>{
    e.target.style.backgroundColor='transparent'
cl(e.target.value)
}
// const onkeydown=(e)=>{
// e.target.style.backgroundColor='blue';
// cl(e.target.value)

// }



username1.addEventListener('focus',onusername)
username1.addEventListener('blur',onbrul);
username1.addEventListener('keyup',onkey)
username1.addEventListener('input',onkey)
// username1.addEventListener('keydown',onkeydown)

