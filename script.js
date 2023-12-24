let slides=document.querySelectorAll(".slides")
// console.log(slides[1]);
let count=0;
slides.forEach((slide,index)=>
{
    slide.style.left=`${index*100}%`;
}
)
const nextbtn=document.getElementById("next").addEventListener("click",()=>{
   
    if(count<0)
    {count++;
        slidedisplay();
        
    }
    console.log(count);
})
const prevbtn=document.getElementById("previous").addEventListener("click",()=>{
    if(count>-(slides.length-1))
    {count--;
    slidedisplay();
    }
})
function slidedisplay(){
    slides.forEach((slide)=>{
        slide.style.transform=`translateX(${count*100}%)`;
    })
}