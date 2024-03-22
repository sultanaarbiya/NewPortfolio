let navbox = document.querySelectorAll('nav ul li');

const heading = function(()=>{
    for(let  i=0;i<4;i++){
        navbox.addEventListener('click',(e)=>{
              console.log(e.target.innerText)
        })
    }
});


console.log(navbox[0].innerText)
console.log(navbox[1])
console.log(navbox)