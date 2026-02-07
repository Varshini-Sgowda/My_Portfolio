/* typing effect */
const roles=[
  "Software Engineer",
  "Java Developer",
  "Python Developer",
  "Problem Solver"
];

let i=0,j=0,del=false;
const el=document.querySelector(".typing");

function type(){
 let word=roles[i];
 el.textContent=word.slice(0,j);

 if(!del){
  j++;
  if(j>word.length) del=true;
 }
 else{
  j--;
  if(j===0){
    del=false;
    i=(i+1)%roles.length;
  }
 }

 setTimeout(type,80);
}
type();



/* reveal animation */
window.addEventListener("scroll",()=>{
 document.querySelectorAll(".reveal").forEach(sec=>{
  if(sec.getBoundingClientRect().top < window.innerHeight-80){
   sec.classList.add("show");
  }
 });
});


/* particles */
particlesJS("particles-js",{
  particles:{
    number:{value:60},
    color:{value:"#38bdf8"},
    size:{value:3},
    move:{speed:2}
  }
});
