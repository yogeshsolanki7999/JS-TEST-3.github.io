
let color=['#eb4034','#34d8eb','#cc56b2','#6556cc','red','yellow'];

let button=document.getElementById('button');

button.addEventListener('click',function(){
 var random=color[Math.floor(Math.random()*color.length)]
 
 let container=document.getElementById('container');

 container.style.background=random;
})


 